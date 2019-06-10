// Basic file for column in the grid structure
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../Col.style';
import withStyles from '../../../hoc/withStyles';

// Passing on the colConfig to the style File and also the flag to add inline-block to the column
const Col = ({ children, className }) => <div className={className}>{children}</div>;

Col.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  colSize: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
  }),
};

Col.defaultProps = {
  colSize: {
    small: 6,
    medium: 8,
    large: 12,
  },
};

export default withStyles(Col, styles);
export { Col as ColVanilla };
