import React from 'react';
import Challenge from './Challenge';
import styles from '../styles/App.module.css';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        Drawing Challenges
      </div>
      <div className={styles.main}>
        <Challenge 
          file={'../challenges/square.js'}
        />
      </div>
    </div>
  );
}

export default App;
