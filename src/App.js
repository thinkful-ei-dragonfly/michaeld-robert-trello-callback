import React from 'react';
import Split from './composition/Split';
import './App.css';





function App() {
  return (
    <main className='App'>
      <Split className='left'>
        Content of the left split
      </Split> 
      <Split className='right'>
        Content of the right split
      </Split>
    
    </main>
  );
}

export default App;