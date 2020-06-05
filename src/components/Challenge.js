import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Challenge.module.css';
import Code from './Code';

function createCommands(size, ctx) {
  function setColor(red, green, blue) {
    const r = Math.floor(255 * red);
    const g = Math.floor(255 * green);
    const b = Math.floor(255 * blue);

    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
  }

  function moveTo(x, y) {
    const yi = size - y;
    ctx.moveTo(x, yi);
  }

  function lineTo(x, y) {
    const yi = size - y;
    ctx.lineTo(x, yi);
    ctx.stroke();
  }

  return {
    setColor,
    moveTo,
    lineTo,
  };
}

function Challenge({
  title,
  description,
  draw,
  done,
}) {
  const canvas = useRef(null);
  const [open, setOpen] = useState(!done);

  useEffect(() => {
    if (open) {
      const size = 400;
      canvas.current.width = size;
      canvas.current.height = size;

      const ctx = canvas.current.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#000000';

      draw(createCommands(size, ctx));
    }
  }, [draw, open]);

  function toggleOpen() {
    setOpen((open) => !open);
  }

  function buildContent() {
    if (!open) {
      return null;
    }

    return (
      <div className={styles.content}>
        <div className={styles.description}>
          {description}
        </div>
        <div>
          <canvas
            id={`${title}-canvas`}
            ref={canvas}
            className={styles.canvas}
          >
          </canvas>
        </div>
        <Code draw={draw} />
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div
        className={styles.title}
        onClick={toggleOpen}
      >
        {title}
      </div>
      {buildContent()}
    </div>
  );
}

Challenge.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  draw: PropTypes.func.isRequired,
  done: PropTypes.bool,
};

export default Challenge;
