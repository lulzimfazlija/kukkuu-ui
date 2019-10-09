import React, { ReactNode } from 'react';

import Header from '../../domain/app/header/Header';

type Props = {
  children: ReactNode;
};

function PageLayout(props: Props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default PageLayout;
