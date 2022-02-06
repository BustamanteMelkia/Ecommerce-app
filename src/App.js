import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <div className="circle circle--xl circle--purple"></div>
      <div className="circle circle--lg circle--yellow"></div>
      <div className="circle circle--md circle--yellow"></div>
      <div className="circle circle--sm circle--yellow"></div>
      <div className="circle circle--sm circle--pink"></div>
      <Hero />
    </>
  );
}

export default App;
