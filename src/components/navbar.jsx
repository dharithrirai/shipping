import React from 'react'
import{
    MDBNavbar,
    MDBNavbarBrand,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,

}
 from "mdbreact";

function NavBar(props)  {
    return (
        <div>
        <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
        <strong className="white-text">SHIPPING BOX</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarcollapse3" navbar>
            <MDBNavbarNav right>
            <MDBNavItem >
                <MDBNavLink
                className="waves-effect waves-light"
                to={props.navLink.path}
                >
                    {props.navLink.Lable}
                </MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        </div>
    );
}
export default NavBar;
