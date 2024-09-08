
import './App.css';
import Home from './Components/Home.jsx';
import  About from './Components/About.jsx'
import Process from  './Components/Process.jsx'
import Testimonial from './Components/Testimonial.jsx';
import Contact from './Components/Contact.jsx'; 
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Process/>
     <Testimonial/>
     <Contact/>
     <Footer/>
     
     
    </div>
  );
}

export default App;
