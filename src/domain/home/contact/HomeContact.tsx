import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './homeContact.module.scss';

const HomeContact: React.FunctionComponent = props => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <div className={styles.contact}>
        <h2>{t('home.contact.heading.text')}</h2>
        <div className={styles.contactPersons}>
          <div className={styles.service}>
            <h3>{t('home.contact.service.name')}</h3>
            <p>{t('home.contact.service.text')}</p>
            <a href="mailto:kulttuurin.kummilapset@hel.fi">
              kulttuurin.kummilapset@hel.fi
            </a>
          </div>
          <div className={styles.godchild}>
            <h3>{t('home.contact.godchild.name')}</h3>
            <p>{t('home.contact.godchild.text')}</p>
            <a href="mailto:hkokummilapset@hel.fi">hkokummilapset@hel.fi</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
