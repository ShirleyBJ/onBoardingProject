import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from 'reactstrap';

export default function Chaussures({qteShoes,onClick}) {
    // var [qteShoes,setQteShoes] = useState (0);
    // function addShoesToCart(){
    //     setQteShoes(qteShoes + 1 );
    //     console.log(qteShoes);
    // }
    return (
        <div>
            <div>
                
                <Card
                    style={{
                        width: '18rem',
                        margin: '10px'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://cdn.shopify.com/s/files/1/2358/2817/products/Air-Jordan-4-Sail-Canvas-1_2000x.png?v=1655310219"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Nom du produit
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Prix
                        </CardSubtitle>
                        <CardText>
                            Description .
                        </CardText>
                        <UncontrolledDropdown
                            style={{
                                margin: '5px'
                            }}
                            direction="down"
                        >
                            <DropdownToggle
                                caret
                                color="dark"
                            >
                                Taille
                            </DropdownToggle>
                            <DropdownMenu dark>
                                <DropdownItem>
                                    39
                                </DropdownItem>
                                <DropdownItem>
                                    40
                                </DropdownItem>
                                <DropdownItem>
                                    41
                                </DropdownItem>
                                <DropdownItem>
                                    42
                                </DropdownItem>
                                <DropdownItem />
                                <DropdownItem>
                                    43
                                </DropdownItem>
                                <DropdownItem>
                                    44
                                </DropdownItem>
                                <DropdownItem>
                                    45
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <Button onClick={onClick}>
                            Ajouter au panier
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}