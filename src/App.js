import React from 'react';
// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="circle circle--xl circle--purple"></div>
        <div className="circle circle--lg circle--yellow"></div>
        <div className="circle circle--md circle--yellow"></div>
        <div className="circle circle--sm circle--yellow"></div>
        <div className="circle circle--sm circle--pink"></div>
        <Features/>
      </main>
      <Footer />
    </>
  );
}

export default App;
