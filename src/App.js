import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
        <Header/>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
