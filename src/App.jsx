import './App.css';
import './styles/Global.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import News from './components/News';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonial />
      <News />
    </>
  );
}

export default App;

