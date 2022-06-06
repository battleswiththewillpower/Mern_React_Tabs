//parent
import './App.css';
import Main from './components/Main';
// import { useState } from 'react';
import React from 'react';

function App() {
  
  return (
    <div className="App">
      <Main tabItems={[
        { header:"tab1", content: "tab1 content"},
        { header:"tab2", content: "tab2 content"},
        { header:"tab3", content: "tab3 content"},
        { header:"tab4", content: "tab4 content"},
        { header:"tab5", content: "tab5 content"}
    ]} />
     
    </div>
  );
}

export default App;
