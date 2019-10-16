import React from 'react';
import { RouteProps } from 'react-router';

import Layout from '../app/layout/Layout';

type Props = RouteProps & {};

function Home(props: Props) {
  return (
    <Layout>
      <div className="home">Foo</div>
    </Layout>
  );
}

export default Home;
