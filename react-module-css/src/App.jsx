import React from 'react';
import Button from './components/Button/button.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './section/Hero/hero.jsx';
import Services from './section/Services/services.jsx';
import Footer from './section/Footer/footer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer/>
    </>
  );
}

export default App;
