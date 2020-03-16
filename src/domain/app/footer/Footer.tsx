import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './footer.module.scss';
import Container from '../layout/Container';

const Footer: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footerWrapper}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.helsinkiLogo}></div>
          <div className={styles.copyright}>
            <p>{t('footer.copyrightText')}</p>
          </div>
          <div className={styles.links}>
            <Link to="/accessibility#start">
              {t('accessibilityStatement.title')}
            </Link>{' '}
            • <Link to="/terms#">{t('termsOfService.title')}</Link> •{' '}
            <a
              href={t('descriptionOfTheFile.url')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('descriptionOfTheFile.title')}
            </a>{' '}
            •{' '}
            <a href={t('dataProtection.url')} rel="noopener noreferrer">
              {t('dataProtection.title')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
