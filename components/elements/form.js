import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* istanbul ignore next */
const StyledForm = styled.form`
  max-width: 900px;
`;

export class Form extends React.Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.onSubmit} autoComplete="off">
        {this.props.children}
      </StyledForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

