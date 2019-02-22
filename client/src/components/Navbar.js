import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import ButtonContainer from './Button';

class Navbar extends Component {
    render() {
        return (
            

            
            <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
               {/*https://cdn2.iconfinder.com/data/icons/vivid/48/bag-512.png */}

            <Link to="">
                <img src={logo} alt="turstore" className="navbar-brand"/>
            </Link>

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5 text-blue">
                    <Link to="/" className="nav-link">
                        TurStore
                    </Link>
                </li>
            </ul>

            
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                <span className="mr-2">
                    <i className="fas fa-cart-arrow-down"></i>
                </span>
                    my cart
                </ButtonContainer>
            </Link>
            </NavWrapper>
            
        );
    }
}

const NavWrapper =styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--skyBlue) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }

`
 
export default Navbar;