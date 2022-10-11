import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experiece from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiece/>
      <Portfolio/>
      <Contact/>
      <Footer/>      
    </>
  );
}

export default App;
