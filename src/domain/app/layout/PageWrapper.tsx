import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

import styles from './pageWrapper.module.scss';
import Container from './Container';
const PageWrapper: FunctionComponent<{
  className?: string;
  title?: string;
  containerClassName?: string;
  description?: string;
}> = ({
  children,
  className,
  containerClassName,
  title = 'appName',
  description = 'homePage.hero.descriptionText',
}) => {
  const { t } = useTranslation();
  const translatedTitle =
    title !== 'appName' ? `${t(title)} - ${t('appName')}` : t('appName');
  const translatedDescription =
    title !== 'homePage.hero.descriptionText'
      ? t(description)
      : t('homePage.hero.descriptionText');

  return (
    <div className={classnames(styles.pageWrapper, className)}>
      {translatedTitle && (
        <Helmet>
          <title>{translatedTitle}</title>
          <meta name="description" content={translatedDescription} />
        </Helmet>
      )}
      <Container className={containerClassName}>{children}</Container>
    </div>
  );
};

export default PageWrapper;
