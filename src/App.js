import logo from './logo.svg';
import './App.css';
import ArrayApp from './ArrayApp';

function App() {
 
  const age = 25;
  const isGreen = true;

 return (

  <div className="App">

    {age >= 18 ? <h1> Over Age </h1> : <h1> Under Age </h1>}

    <h1 style={{ color: isGreen ? "green" : "red"}} > This is the Color. </h1>

    {isGreen && <button> This is a Button </button> }

    <ArrayApp />

  </div>

 );

}

export default App;
