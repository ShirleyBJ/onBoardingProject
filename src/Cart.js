import React from 'react';
import {
    NavLink,
    Button,
    Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


function Cart({ qteShoes }) {
    return (
        // <div>
        //     <NavLink href="#">
        //         <FontAwesomeIcon
        //             style={{
        //                 color: 'black',
        //                 fontSize: '25px'
        //             }}
        //             icon={faCartArrowDown}
        //         />
        //     </NavLink>
        //     <Button>{qteShoes}</Button>
        // </div>

        <div>
            <NavLink href="#">
                <FontAwesomeIcon
                    style={{
                        color: 'black',
                        fontSize: '25px'
                    }}
                    icon={faCartArrowDown}
                />
                <Badge>
                    {qteShoes}
                </Badge>
            </NavLink>
        </div>
    );
}

export default Cart;