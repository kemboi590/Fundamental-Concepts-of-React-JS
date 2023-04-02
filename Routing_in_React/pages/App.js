
import './App.css';
// import CatFact from './resources/FetchDataFromAPI/CatFact';
// import PredictbyValue from './resources/FetchDataFromAPI/PredictbyValue';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Navbar from './pages/Navbar';


function App() {

  return (
    <div className="App">
      <>
        <Router>
         <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
        </Router>
      </>

    </div>
  );
}

export default App;
