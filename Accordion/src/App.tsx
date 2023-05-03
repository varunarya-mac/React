import React from 'react';

import './App.css';
import { Accordion } from './accordion/Accordion';

function App() {

  const arr = [1,2,3];

  const accordionlist = arr.map((item)=> {
    return (
      <Accordion title='hello' child={<p>Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. 
        Earum at officia architecto,
        recusandae ea neque commodi 
        obcaecati facilis natus excepturi libero laboriosam ipsa expedita,
        porro temporibus? Tempore dolores obcaecati suscipit.</p>}/>
      
    )
  });

  return (
    <div className="app">
      {accordionlist}
      </div>
  );
}

export default App;
