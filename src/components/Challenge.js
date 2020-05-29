import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Challenge.module.css';
import Code from './Code';

function Challenge({ file }) {
  return (
    <div className={styles.main}>
      {file}
      <Code />
    </div>
  );
}

Challenge.propTypes = {
  file: PropTypes.string.isRequired,
};

export default Challenge;
