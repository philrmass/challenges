import React from 'react';
import Challenge from './Challenge';
import styles from '../styles/App.module.css';
import * as square from '../challenges/square';
import * as hexagon from '../challenges/hexagon';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>
          Drawing Challenges
        </div>
      </div>
      <div className={styles.main}>
        <Challenge { ...square } />
        <Challenge { ...hexagon } />
      </div>
    </div>
  );
}

export default App;
