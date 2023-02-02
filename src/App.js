import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // JSX, não HTML
    // para atribuir classe ao elemento, usa-se className
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>UN-TAKE ME</b> - React
          
        </p>
      </header>
    </div>
  );
}

export default App;
