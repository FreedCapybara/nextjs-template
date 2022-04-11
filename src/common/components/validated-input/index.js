import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* istanbul ignore next */
const Wrapper = styled.div`
  width: 100%;
`;

/* istanbul ignore next */
const Input = styled.input`
  padding-right: 32px !important;
`;

/* istanbul ignore next */
const IndicatorIcon = styled.span`
  position: absolute;
  top: 10px;
  right: ${({ offset }) => offset || '12px'};
  color: ${({ theme, color }) => theme.colors[color.toString()]};
  ${({ rotate }) => (rotate ? `
    transform: rotate(${rotate});
  ` : null)}
`;

export class ValidatedInput extends React.Component {

  onChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    const { type, value, isValid, showSuccess, id, name, required, maxLength, iconOffset } = this.props;

    return (
      <Wrapper>
        <Input type={type || 'text'} id={id} name={name} required={required} maxLength={maxLength} autoComplete="new-password"
          onChange={this.onChange} value={value} />

        {value && (
          isValid ? (showSuccess &&
            <IndicatorIcon color="green" rotate="8deg" offset={iconOffset} className="ti-check" />
          ) : (
            <IndicatorIcon color="red" offset={iconOffset} className="ti-alert" />
          )
        )}
      </Wrapper>
    );
  }
}

ValidatedInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  isValid: PropTypes.bool,
  showSuccess: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  iconOffset: PropTypes.string
};

