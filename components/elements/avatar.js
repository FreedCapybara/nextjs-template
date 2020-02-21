import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { gravatarUrl } from '@lib/gravatar';

/* istanbul ignore next */
const AvatarImage = styled.img`
  width: ${({ width, size }) => width || size || '36px'};
  height: ${({ height, size }) => height || size || '36px'};
  border-radius: 100%;
`;

export class Avatar extends React.Component {

  get gravatarUrl() {
    const { email } = this.props;
    return gravatarUrl(email);
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

