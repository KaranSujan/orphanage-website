import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Donation from './components/Donation';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){
  return (
    <div>
      <Navbar/>
      <Home/>
      <Events/>
      <Donation/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}