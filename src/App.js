import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Skills></Skills>
      <Project></Project>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
