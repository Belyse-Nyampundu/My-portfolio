// import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/home';
import About from './Components/abouMe';
import Skills from './Components/skills';
import Project from './Components/project';
// import { BrowserRouter, Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/'exact element={<Image/>}/>
          <Route path='/navigation' element={<Navigation/>}/>
        </Routes>
      </Router>
      */}
    <Navigation/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    
  
  
    </div>
  );
}

export default App;
