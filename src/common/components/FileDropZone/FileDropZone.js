import PropTypes from 'prop-types';
import styles from './FileDropZone.module.scss';

export function FileDropZone(props) {
  const { dragging, fileSelected, error } = props;

  let dropZoneClass = styles.dropZone;

  // Apply styles in the following order:
  // 1. dragging -- most important, since the user is interacting with the component
  // 2. error -- ensure the error state shows over the valid state, so the user isn't surprised if an upload fails, etc.
  // 3. fileSelected -- provides visual feedback when the user drops files
  if (dragging) {
    dropZoneClass += ` ${styles.dragging}`;
  } else if (error) {
    dropZoneClass += ` ${styles.error}`;
  } else if (fileSelected) {
    dropZoneClass += ` ${styles.fileSelected}`;
  }

  return (
    <div className={dropZoneClass}>
      {props.children}
    </div>
  );
}

FileDropZone.propTypes = {
  dragging: PropTypes.bool,
  fileSelected: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node
};

