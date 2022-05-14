import React,{ useState } from 'react';
import './App.css';


function App() {
  const [count , setcount] = useState(0);
  const inc = () => {
    setcount(count+1)
  }
  const dec = () => {
    setcount(count-1)
  }

  const inc2 = () => {
    setcount(count+3)
  }
  const dec2 = () => {
    setcount(count-2)
  }

  return (
    <div className="App">
        <h1>Counter App</h1>

      <div className='counter'>

      <button className='inc' onClick={inc2}> +3 </button>
      <button className='inc' onClick={inc}> +1 </button>
        <h1>{count}</h1>
      <button className='dec' onClick={dec}> -1 </button>
      <button className='dec' onClick={dec2}> -2 </button>
      
      </div>

        
    </div>
  );
}

export default App;
