import React, { ReactNode } from 'react';

import Header from '../header/Header';
import styles from './layout.module.scss';
import Footer from '../footer/Footer';
import Container from './Container';

type Props = {
  children: ReactNode;
};

function PageLayout(props: Props) {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <div className={styles.pageBody}>
        <Container>{props.children}</Container>
      </div>

      <Footer />
    </div>
  );
}

export default PageLayout;
