
import './css/App.css';
import AboutMe from './Components/AboutMe';
import Aptitudes from './Components/Aptitudes';
import Experiencias from './Components/Experiencias';
import NavBar from './Components/NavBar';
import Proyectos from './Components/Proyectos';
import Footer from './Components/Footer';

function App() {
  return (
      <div className='App'>
      <NavBar />
      <AboutMe />
      <Aptitudes />
      <Experiencias />
      <Proyectos />
      <Footer />
      </div>
  );
}

export default App;
