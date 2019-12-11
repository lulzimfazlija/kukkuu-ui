import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './homeContact.module.scss';

const HomeContact: React.FunctionComponent = props => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <div className={styles.contact}>
        <h1>{t('home.contact.heading.text')}</h1>
        <div className={styles.contactPersons}>
          <div className={styles.service}>
            <p>{t('home.contact.service.name')}</p>
            <p>{t('home.contact.service.text')}</p>
            <a href="mailto:kulttuurin.kummilapset@hel.fi">
              kulttuurin.kummilapset@hel.fi
            </a>
          </div>
          <div className={styles.godchild}>
            <p>{t('home.contact.godchild.name')}</p>
            <p>{t('home.contact.godchild.text')}</p>
            <a href="mailto:hkokummilapset@hel.fi">hkokummilapset@hel.fi</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
