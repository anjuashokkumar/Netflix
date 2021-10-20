import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Rowpost from './components/rowpost/Rowpost';
import './App.css';
import { originals,trending,comedy,action,horror,romance } from './Urls';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={trending} title='Trending' isSmall />
      <Rowpost url={comedy} title='Comedy' isSmall />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={horror} title='Horror' isSmall />
      <Rowpost url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
