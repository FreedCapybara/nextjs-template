import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '@components/elements';

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
  };

  render() {
    return (
      <Wrapper>
        {this.state.deleteEnabled ?
          <Button type="button" onClick={this.toggleDelete}>
            <span className="ti-unlock" />
            Disable delete
          </Button>
          :
          <Button type="button" onClick={this.toggleDelete}>
            <span className="ti-lock" />
            Enable delete
          </Button>
        }

        <Button type="button" onClick={this.delete} disabled={!this.state.deleteEnabled}>
          <span className="ti-trash" />
          Delete
        </Button>
      </Wrapper>
    );
  }
}

DeleteButtons.propTypes = {
  onDelete: PropTypes.func
};

