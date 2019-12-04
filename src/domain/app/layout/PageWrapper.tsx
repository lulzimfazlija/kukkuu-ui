import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Container from './Container';

const PageWrapper: FunctionComponent<{
  className?: string;
  title?: string;
}> = ({ children, className, title }) => {
  const { t } = useTranslation();
  const translatedTitle: string = title
    ? `${t(title)} - ${t('appName')}`
    : t('appName');
  return (
    <div>
      {title && (
        <Helmet>
          <title>{translatedTitle}</title>
        </Helmet>
      )}
      <Container className={className}>{children}</Container>
    </div>
  );
};

export default PageWrapper;
