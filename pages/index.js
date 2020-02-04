import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage, defineMessages } from 'react-intl';

import { MainLayout } from '@components/layout';

const messages = defineMessages({
  pageTitleText: {
    id: 'index.page-title',
    defaultMessage: 'Home',
    description: 'Page title',
  }
});

export class Home extends React.Component {

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <MainLayout title={formatMessage(messages.pageTitleText)}>

        <h1>
          <FormattedMessage id="home.title" defaultMessage="Home" description="Home page title" />
        </h1>

      </MainLayout>
    );
  }
}

Home.propTypes = {
  intl: PropTypes.object
};

/* istanbul ignore next */
const mapStateToProps = (/*state*/) => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Home));

