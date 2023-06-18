import { useState } from "react";
import "./App.css";

function App() {

  let [value, setValue ] = useState(0);
  if(value < 100) {
      setTimeout(()=> {
      setValue((preValue) => {
        const newValue = preValue + 10;
        console.log(newValue)
        return newValue;
      })
    }, 500)
    }
  
  return (
    <div>
      <div className="progress-bar__container">
      <div className="progress-bar__inner" style={{width: value+'%'}}></div>
      </div>
      
    </div>
  );
}

export default App;
