import React from 'react';
import Latex from 'react-latex';

const Home = () => {
  return (
    <div>
      <p>
        <Latex>{'Hello $ x + y = z$'}</Latex>
      </p>
    </div>
  );
};

export default Home;
