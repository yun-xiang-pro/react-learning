import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Detail from './pages/page1/detail';
import Detail2 from './pages/page1/detail/detail2';

import RouterApps from './router-app';

function App() {
  return (
    <div className="App">
      <RouterApps/>
    </div>
  );
}


export default App;