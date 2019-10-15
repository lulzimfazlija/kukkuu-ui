import React, { FunctionComponent } from 'react';

import styles from './footer.module.scss';
import Container from '../layout/Container';
import { formatMessage } from '../../../common/translation/utils';

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footerWrapper}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.helsinkiLogo}></div>
          <div className={styles.copyright}>
            <p>{formatMessage('footer.copyrightText')}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
