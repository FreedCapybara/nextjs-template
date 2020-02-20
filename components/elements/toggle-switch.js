import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* istanbul ignore next */
const SwitchBackground = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 42px;
  height: 18px;
  background-color: ${({ theme, value }) => value ? theme.colors.primary : 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all .3s;
`;

/* istanbul ignore next */
const Switch = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ theme, value }) => value ? 'white' : theme.colors.primary};
  border-radius: 100%;
  transform: translateX(${({ value }) => value ? '10px' : '-10px'});
  transition: all .3s;
`;

export class ToggleSwitch extends React.Component {

  handleClick = () => {
    const { onClick, value } = this.props;
    if (onClick) {
      onClick(!value);
    }
  };

  render() {
    const { value } = this.props;

    return (
      <SwitchBackground value={value} onClick={this.handleClick}>
        <Switch value={value} />
      </SwitchBackground>
    );
  }
}

ToggleSwitch.propTypes = {
  value: PropTypes.bool,
  onClick: PropTypes.func
};

