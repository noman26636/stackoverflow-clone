import { useContext } from 'react';
import './App.css';
import MainHome from './components/Homepage/MainHome';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import StackCards from './components/StackoverflowCarts/StackCards';
import ThreeContainer from './components/ThreeContainer/ThreeContainer';
// import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor : darkMode ? "#2d2d2d" : 'white', overflow: 'hidden'}}>
     <Navbar/>
     <section className='sections'>
     <MainHome/>
      <StackCards/>
      <Slider/>
     </section>
     <ThreeContainer/>
    </div>
  );
}

export default App;
