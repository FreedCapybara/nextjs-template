import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import md5 from 'js-md5';

/* istanbul ignore next */
const AvatarImage = styled.img`
  width: ${({ width, size }) => width || size || '36px'};
  height: ${({ height, size }) => height || size || '36px'};
  border-radius: 100%;
`;

export class Avatar extends React.Component {

  get gravatarUrl() {
    const { email } = this.props;
    const hash = email ? md5(email.toLowerCase()) : '00000000000000000000000000000000';
    return `https://www.gravatar.com/avatar/${hash}?default=mp`;
  }

  render() {
    const { email, width, height, size } = this.props;

    return (
      <AvatarImage
        src={this.gravatarUrl}
        title={email}
        alt={`Avatar image for ${email}`}
        width={width}
        height={height}
        size={size}
      />
    );
  }
}

Avatar.propTypes = {
  email: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string
};

