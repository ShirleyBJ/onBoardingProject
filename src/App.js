// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './Chaussures.js';
import Chaussures from './Chaussures.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faUser, faHouse} from '@fortawesome/free-solid-svg-icons'
import {
  Nav,
  NavItem,
  NavLink,
  Input,
  InputGroup,
  Button
} from 'reactstrap';


function App(props) {
  localStorage.setItem('nb_product', 0)
  var chaussureList = [];

  for (let i = 0; i < 10; i++) {
    chaussureList.push(<Chaussures />);
  }
  var divstyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

const [addToCart, setAddToCart] = useState(localStorage.getItem('nb_product'));


  return (
    <div>
      <div>
        <Nav tabs
        style={{
          padding : '10px',
        }}
        >
          <NavItem>
            <NavLink href="#">
            <FontAwesomeIcon 
                style={{
                  color: 'black',
                  fontSize: '25px'
                }}
              icon={faHouse} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
            style={{
              color: 'black',
            }}
            href="#">
            FEMME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
            style={{
              color: 'black',
            }}
            href="#">
              HOMME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
            style={{
              color: 'black',
            }}
            href="#">
            ENFANT
            </NavLink>
          </NavItem>
          <InputGroup
          style={{
            width: '30%',
            marginLeft: 'auto'
          }}
          >
            <Input 
            style={{
              border : ' 1px solid black',
            }}
            />
            <Button>
              Rechercher
            </Button>
          </InputGroup>
          <NavItem
          style={{
            marginLeft: 'auto'
          }}
          >
            <NavLink href="#">
              <FontAwesomeIcon 
              style={{
                color: 'black',
                fontSize: '25px'
              }}
              icon={faCartArrowDown} 
              />
              {addToCart}

            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
            <FontAwesomeIcon 
              style={{
                color: 'black',
                fontSize: '25px'
              }}
              icon={faUser} />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div style={divstyle}>
        {chaussureList}
      </div>
    </div>

  );
}

export default App;
