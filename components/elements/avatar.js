import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import md5 from 'js-md5';

/* istanbul ignore next */
const AvatarImage = styled.img`
  width: ${({ width }) => width || '36px'};
  height: ${({ height }) => height || '36px'};
  border-radius: 100%;
`;

export class Avatar extends React.Component {

  get gravatarUrl() {
    const { email } = this.props;
    const hash = email ? md5(email.toLowerCase()) : '00000000000000000000000000000000';
    return `https://www.gravatar.com/avatar/${hash}?default=mp`;
  }

  render() {
    const { email } = this.props;

    return (
      <AvatarImage src={this.gravatarUrl} alt={`Avatar image for ${email}`} />
    );
  }
}

Avatar.propTypes = {
  email: PropTypes.string
};

