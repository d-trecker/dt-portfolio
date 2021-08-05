import React, { useState } from 'react';
import Nav from './components/Nav'
import Gallery from './components/Gallery';
import About from './components/About'
import Contact from './components/Contact'
import './App.css';



function App() {
  
  
  const [contactSelected, setContactSelected] = useState(false);
  return (
<div>
<Nav
contactSelected = {contactSelected}
setContactSelected ={setContactSelected}
></Nav>
{!contactSelected ? (
      <>
      <Gallery></Gallery>
      <About></About>
      </>
      ) : (
      <Contact></Contact>
      )}
</div>
  );
}

export default App;
