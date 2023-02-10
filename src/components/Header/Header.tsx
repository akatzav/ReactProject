import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../image/icon1.png'

type HeaderProps = {
    title: string;
    logo: string
}

const Header = ({ title, logo }: HeaderProps) => {
    return (
        <>
            <div className='d-flex dg-info text-dark p-3 justify-content-between' id="header">
                <img src={logo} alt="" id="logo" />

                <p className='title'>{title}</p>
                <br />
            </div>
        </>
    )
}

export default Header