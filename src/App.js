import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm'
import About from './components/About';


function App() {
  return (
   <>
   <Navbar title="Text Inspecto"/>
   <TextForm/>
   <About/>
   </>
  );
}

export default App;
