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
}> = ({ children, className, containerClassName, title }) => {
  const { t } = useTranslation();
  const translatedTitle: string = title
    ? `${t(title)} - ${t('appName')}`
    : t('appName');
  return (
    <div className={classnames(styles.pageWrapper, className)}>
      {title && (
        <Helmet>
          <title>{translatedTitle}</title>
        </Helmet>
      )}
      <Container className={containerClassName}>{children}</Container>
    </div>
  );
};

export default PageWrapper;
