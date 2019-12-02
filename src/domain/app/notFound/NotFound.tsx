import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../layout/Container';

const NotFound: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="not-found">
        <p>{t('notFound.text')}</p>
      </div>
    </Container>
  );
};

export default NotFound;
