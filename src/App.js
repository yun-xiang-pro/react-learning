import './App.css';
// import Child from './components/child';
import UseState from './components/useState';
import Home from './pages/home'

function App() {
  const copyings = ['contexmenu', 'selectstart', 'copy']
  copyings.forEach((env) => {
    document.addEventListener(env,function(event) {
      return event.returnValue = false
    })
  })

  

  


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;