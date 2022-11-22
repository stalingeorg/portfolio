import React from 'react';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
