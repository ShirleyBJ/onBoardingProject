import React, {useState} from 'react';
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
    UncontrolledDropdown
} from 'reactstrap';

function Chaussures(props) {
    const nombre = localStorage.getItem('nb_product');

    var handleClick = () => {
        // props.handleClickParent(props.name+1);
        console.log('test', nombre);
        localStorage.setItem('nb_product', parseInt(nombre) + 1)

        var i = localStorage.getItem('nb_product')
        console.log('i', i)
    }
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
                            margin : '5px'
                        }}
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
                                <DropdownItem  />
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
                        <Button onClick={()=> handleClick()}>
                            Ajouter au Panier
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
export default Chaussures;