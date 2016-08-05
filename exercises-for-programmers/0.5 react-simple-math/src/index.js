import React from 'react';
import ReactDOM from 'react-dom';
import NumInput from './components/number-input.js';
import NumOutput from './components/number-output.js';

const Main = () => {
  return (
    <div> 
      <div><NumInput /></div>
      <div><NumOutput /></div>
    </div>  
  )
}

ReactDOM.render(<Main />, document.getElementById('container'));