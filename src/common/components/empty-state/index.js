import React from 'react';
import PropTypes from 'prop-types';
import styles from './empty-state.module.scss';

export function EmptyState(props) {
  const { text, padding } = props;

  const wrapperStyle = {
    padding: padding || '20px 0'
  };

  return (
    <div style={wrapperStyle}>
      <em>{text || props.children}</em>
    </div>
  );
}

EmptyState.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  padding: PropTypes.string
};

