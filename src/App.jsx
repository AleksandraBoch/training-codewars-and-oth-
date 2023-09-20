import React from 'react';
import './App.css';
import useInput from "./UlbiTraining/CustomHooks/customHooks";

function App() {
const value=useInput('')
const newValue=useInput('')
    return (
      <div>
          <input {...value} type={"text"} />
          <input {...newValue} type={"text"} />

      </div>
    );
}

export default App;
