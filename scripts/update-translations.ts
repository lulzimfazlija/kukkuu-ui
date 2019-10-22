import * as fs from 'fs';
import * as path from 'path';

import fetch from 'node-fetch';
// @ts-ignore
import * as i18nextConverter from 'i18next-json-csv-converter';

const languages = process.env.TRANSLATION_LANGUAGES.split(',');
const project = process.env.TRANSLATION_PROJECT_NAME;
const sheetUrl = process.env.TRANSLATIONS_URL;

const pathToLocales: string = path.join(
  __dirname,
  '../src/common/translation/i18n'
);

const getTranslations = async (language: string) => {
  const url = `${sheetUrl}tq?tqx=out:csv&sheet=${language}`;
  const res = await fetch(url);
  const body = await res.text();
  if (res.status !== 200) {
    throw Error(
      `Could not fetch ${language} translation data: ${res.status} ${res.statusText}`
    );
  }
  const translations = i18nextConverter.csv2Json(body);
  if (translations.sanityCheck !== `${project}.${language}`) {
    throw new Error(`Download of ${language} translation failed, aborting`);
  }
  return translations;
};

const writeJSONFile = (path: string, data: object) => {
  fs.writeFile(path, JSON.stringify(data, null, 2), 'utf8', function(err) {
    if (err) {
      // FIXME: If writing fails due to permission error,
      // we still get "Done" instead of exit(1).
      throw new Error(err.message); // eslint-disable-line
    }
  });
};

const fetchAll = async () => {
  await Promise.all(
    languages.map(async lang => {
      const res = await getTranslations(lang);
      writeJSONFile(`${pathToLocales}/${lang}.json`, res);
    })
  );
};

const start = async () => {
  try {
    await fetchAll();
    console.log('Done'); // eslint-disable-line
  } catch (err) {
    console.error(err.message); // eslint-disable-line
    process.exit(1);
  }
};

start();
