import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';

import Container from './Container';

const PageWrapper: FunctionComponent<{
  className?: string;
  title?: string;
}> = ({ children, className, title }) => {
  return (
    <div>
      {title && (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
      <Container className={className}>{children}</Container>
    </div>
  );
};

export default PageWrapper;
