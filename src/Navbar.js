import React from 'react';
import Cart from "./Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, } from '@fortawesome/free-solid-svg-icons';
import {
    Nav,
    NavItem,
    NavLink,
    Input,
    InputGroup,
    Button
} from 'reactstrap';


function Navbar({qteShoes}) {
    return (
        <div>
            <Nav tabs
                style={{
                    padding: '10px',
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
                            border: ' 1px solid black',
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
                </NavItem>
                <Cart qteShoes={qteShoes}/>
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
    );
}

export default Navbar;