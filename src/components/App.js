import React from 'react';
import Challenge from './Challenge';
import styles from '../styles/App.module.css';
import * as square from '../challenges/square';
import * as hexagon from '../challenges/hexagon';
import * as gerbil from '../challenges/gerbil';
import * as sinCos from '../challenges/sinCos';

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
        <Challenge { ...gerbil } />
        <Challenge { ...sinCos } />
      </div>
    </div>
  );
}

export default App;
