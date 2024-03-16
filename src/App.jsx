import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Programs from './components/programs/Programs';
import Title from './components/title/Title';
import Dropdown from './components/dropdown/Dropdown';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <Title subTitle='OUR PROGRAM' title='WHAT WE OFFER'/>
      <Programs/>
    </div>
  );
}

export default App;
