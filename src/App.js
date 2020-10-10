import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <h1>TRIBAL<br/>NETWORK</h1>
        <h2>The Network for the modern entertainer</h2>


        <div style={{margin: '500px auto 400px'}} className="navigation">
        <div>
        <button style={{cursor: 'pointer'}} class='button'>LIVE</button>
        </div>

        <div>
        <button style={{cursor: 'pointer'}} class='button'>Log In</button>
        </div>

        <div>
        <button as={Link} to={'/'} style={{cursor: 'pointer'}} className="button">Submit</button>
        </div>
        </div>
        
        
        </p>
      </header>
    </div>

  );

}


export default App;
