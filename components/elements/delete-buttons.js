import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

/* istanbul ignore next */
const Wrapper = styled.div`
  display: flex;
`;

export class DeleteButtons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      deleteEnabled: false
    };
  }

  toggleDelete = () => {
    this.setState({
      deleteEnabled: !this.state.deleteEnabled
    });
  };

  delete = () => {
    if (this.props.onDelete) {
      this.props.onDelete();
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.deleteEnabled ?
          <button type="button" onClick={this.toggleDelete}>
            <span className="ti-unlock" />
            <FormattedMessage id="interfaces.disable-delete" defaultMessage="Disable delete" description="Hide delete toggle button label" />
          </button>
          :
          <button type="button" onClick={this.toggleDelete}>
            <span className="ti-lock" />
            <FormattedMessage id="interfaces.enable-delete" defaultMessage="Enable delete" description="Show delete toggle button label" />
          </button>
        }

        <button type="button" onClick={this.delete} disabled={!this.state.deleteEnabled}>
          <span className="ti-trash" />
          <FormattedMessage id="interfaces.delete" defaultMessage="Delete" description="Delete button label" />
        </button>
      </Wrapper>
    );
  }
}

DeleteButtons.propTypes = {
  onDelete: PropTypes.func
};

