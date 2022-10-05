// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import './Chaussures.js';
import Navbar from './Navbar';
import Chaussures from './Chaussures.js';
import {
} from 'reactstrap';


function App() {
  var chaussureList = [];

    var divstyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    //State qteShoes
    var [qteShoes,setQteShoes] = useState (0);
    function addShoesToCart(){
        setQteShoes(qteShoes + 1 );
        console.log(qteShoes);
    }

    for (let i = 0; i < 10; i++) {
      chaussureList.push(<Chaussures qteShoes={qteShoes} onClick={addShoesToCart}/>);
    }

  return (
    <div>
      <Navbar qteShoes={qteShoes}/>
      <div style={divstyle}>
        {chaussureList}
      </div>
    </div>
  );
}

export default App;
