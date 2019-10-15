import React, { FunctionComponent } from 'react';

import Header from '../header/Header';
import styles from './layout.module.scss';
import Footer from '../footer/Footer';
import Container from './Container';

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <div className={styles.pageBody}>
        <Container>{children}</Container>
      </div>

      <Footer />
    </div>
  );
};

export default PageLayout;
