import * as React from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

import styles from './languageBar.module.scss';
import { SUPPORT_LANGUAGES } from '../../../../../common/translation/TranslationConstants';
import { updateLocaleParam } from '../../../../../common/route/RouteUtils';
import { getCurrentLanguage } from '../../../../../common/translation/TranslationUtils';

const LanguageBar: React.FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLanguage = getCurrentLanguage(i18n);

  return (
    <div className={classnames(className, styles.languageBar)}>
      {Object.values(SUPPORT_LANGUAGES).map((language, index) => (
        <a
          key={index}
          aria-current={
            location.pathname.includes(`/${language}/`) ? 'page' : undefined
          }
          href={updateLocaleParam(location.pathname, currentLanguage, language)}
          lang={language}
        >
          {t(`common.language.${language}`)}
        </a>
      ))}
    </div>
  );
};

export default LanguageBar;
