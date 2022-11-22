import './App.css'
import Square from "./components/Square.js";


function App() {
  const propVariable = "This is a prop"
  return (
    <div className="App">
      <Square propVar={propVariable} />
    </div>
  );
}

export default App;
