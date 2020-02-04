import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';

/* istanbul ignore next */
const Wrapper = styled.div`
  min-height: 120px;
  width: 100%;

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 4px;
  }

  input:not([type=checkbox]):not([type=radio]),
  select,
  textarea {
    width: 100%;
    max-width: 420px;
    font-size: 1rem;
    padding: 8px;
    margin-left: -8px;
    margin-bottom: 20px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    font-family: 'Nunito Sans';

    &[disabled] {
      color: rgb(84, 84, 84);
      cursor: default;
      background-color: rgb(235, 235, 228);
    }
  }

  textarea {
    border-bottom-right-radius: 0;
  }

  p {
    text-align: right;
    max-width: 420px;
  }
`;

/* istanbul ignore next */
const FieldLabel = styled.label`
`;

/* istanbul ignore next */
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    margin-bottom: 0;
    flex-direction: row;
  }
`;

export class FormField extends React.Component {
  render() {
    return (
      <Wrapper>
        <FieldLabel htmlFor={_.camelCase(this.props.label)}>
          {_.upperFirst(this.props.label)} {this.props.optional &&
              <small>
                <FormattedMessage id="form-field.optional" defaultMessage="(optional)" description="Form field label additional text" />
              </small>
          }
        </FieldLabel>

        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

FormField.propTypes = {
  label: PropTypes.string,
  optional: PropTypes.bool,
  children: PropTypes.node
};

