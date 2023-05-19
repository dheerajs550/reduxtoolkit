import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
  MDBNavbarLink,
  MDBBadge,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../features/Cartslice';

export default function Navbar() {
 const {cart,totalQuantity}= useSelector((state)=>state.carts)
 const dispatch =useDispatch()
 useEffect(() => {
  dispatch(getCartTotal())
 }, [cart])
 
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <Link to='/'>

        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        </Link>
       <span>All prodact</span>
          {/* <MDBBtn className=' bg-dard'>Cart</MDBBtn> */}
          
          <MDBNavbarLink href='#'>
              <MDBBadge pill color='danger'>{totalQuantity}</MDBBadge>
              <Link to="/shopping">
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
              </Link>
            </MDBNavbarLink>
      </MDBContainer>
    </MDBNavbar>
  );
}