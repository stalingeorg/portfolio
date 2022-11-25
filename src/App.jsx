import React from 'react';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
