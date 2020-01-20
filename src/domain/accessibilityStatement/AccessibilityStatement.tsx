import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './accessibilityStatement.module.scss';
import Container from '../app/layout/Container';
import { getCurrentLanguage } from '../../common/translation/TranslationUtils';
import AccessibilityStatementEn from './AccessibilityStatementEn';
import AccessibilityStatementFi from './AccessibilityStatementFi';
import AccessibilityStatementSv from './AccessibilityStatementSv';

type StatementProps = {
  lang: string;
};

const Statement: FunctionComponent<StatementProps> = props => {
  const lang = props.lang;
  switch (lang) {
    case 'en':
      return <AccessibilityStatementEn />;
    case 'fi':
      return <AccessibilityStatementFi />;
    case 'sv':
      return <AccessibilityStatementSv />;
    default:
      return <p>Invalid language.</p>;
  }
};

const AccessibilityStatement: FunctionComponent = () => {
  const { i18n } = useTranslation();
  const locale = getCurrentLanguage(i18n);

  return (
    <Container>
      <div className={styles.accessibilityStatement}>
        <Statement lang={locale} />
      </div>
    </Container>
  );
};

export default AccessibilityStatement;
