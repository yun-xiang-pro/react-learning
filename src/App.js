import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/page1/:id' element={<Page1/>}/>
          <Route path='/page3' element={<Page3/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;