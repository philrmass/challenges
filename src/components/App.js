import React from 'react';
import Challenge from './Challenge';
import styles from '../styles/App.module.css';
import * as square from '../challenges/square';

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
      </div>
    </div>
  );
}

export default App;
