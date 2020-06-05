import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Code.module.css';

function Code({
  draw,
}) {
  const [open, setOpen] = useState(false);

  function buildButton() {
    if (open) {
      return null;
    }

    return (
      <button
        className={styles.click}
        onClick={() => setOpen(true)}
      >
        Click to see the code
      </button>
    );
  }

  function buildCode() {
    if (!open) {
      return null;
    }

    return (
      <button
        className={styles.code}
        onClick={() => setOpen(false)}
      >
        {draw.toString()}
      </button>
    );
  }

  return (
    <div className={styles.main}>
      {buildButton()}
      {buildCode()}
    </div>
  );
}

Code.propTypes = {
  draw: PropTypes.func.isRequired,
};

export default Code;
