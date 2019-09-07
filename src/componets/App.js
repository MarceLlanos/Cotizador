import React from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Header title = 'Cotizador de seguro de auto'/>
      <div className="container-form">
        <Form/>
      </div>
    </div>
  );
}

export default App;
