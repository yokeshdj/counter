import logo from './logo.svg';
import './App.css';
import Counter from "./Components/Counter"
import { useState } from 'react';
function App() {
  const [hide,setHide] = useState(false);
  return (
    <div className="App">
      {!hide && <Counter initial={5}/>}
      <button onClick={()=>setHide(!hide)}>TOGGLE HIDE</button>
    </div>
  );
}

export default App;
