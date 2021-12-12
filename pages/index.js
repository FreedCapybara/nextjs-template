import React from 'react';
import { connect } from 'react-redux';

import { MainLayout } from '@components/layout';

export class Home extends React.Component {

  render() {
    return (
      <MainLayout title="Home">

        <h1>
          Home
        </h1>

      </MainLayout>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = (/*state*/) => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

