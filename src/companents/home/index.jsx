import React from 'react' 
import TopBar from './topBar';
import Topics from './topics';
import Stream from './stream';
function Home() {
  return (
    <>
      <TopBar/>
      <Topics/>
      <Stream/>
    </>
  );
}

export default Home;
