import React, { useState } from 'react';
import Nav from './components/Nav'
import Gallery from './components/Gallery';
import About from './components/About'
import Contact from './components/Contact'
import './App.css';



function App() {
  const [categories] = useState([]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  const [contactSelected, setContactSelected] = useState(false);
  return (
<div>
<Nav
categories={categories}
setCurrentCategory={setCurrentCategory}
currentCategory={currentCategory}
contactSelected = {contactSelected}
setContactSelected ={setContactSelected}
></Nav>
<About></About>
<Gallery currentCategory={currentCategory}></Gallery>
<Contact currentCategory={currentCategory}></Contact>
</div>
  );
}

export default App;
