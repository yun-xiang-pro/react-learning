import './App.css';


import RouterApps from './router-app';
import Layout from './pages/laout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout></Layout>
      </Router>
    </div>
  );
}


export default App;