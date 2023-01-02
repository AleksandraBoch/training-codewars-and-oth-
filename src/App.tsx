import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Select} from "./reactKabzda/Selected";

function App() {
  return (
    <div className="App">
<Select value={'5'}
      items={[
      {value:'1', title:'Spb'},
      {value:'2',title:'Moskow'}]
    }
        />
    </div>
  );
}

export default App;
