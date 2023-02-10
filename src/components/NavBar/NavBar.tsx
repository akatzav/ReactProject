import React from 'react'
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { GrCircleInformation } from 'react-icons/gr'
import { BiFilter } from 'react-icons/bi'
import css from '../Home-Page/HomePage.module.scss'
import { IoIosInformationCircleOutline } from 'react-icons/io'

type HeaderProps = {
    title: string;
    logo: string
}

export const NavBar = () => {
    return (

        <div id="header">

            <Navbar expand="lg" className={css.nav} >
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=' me-auto '>
                            <Nav.Link className={css.navLinks} href="/Filters"> <BiFilter /> סנן לפי</Nav.Link>
                            <Nav.Link className={css.navLinks} href="/AddCard"> <AiOutlinePlusCircle /> הוסף מסעדה </Nav.Link>
                            <Nav.Link className={css.navLinks} href="/About"> <IoIosInformationCircleOutline /> אודות</Nav.Link>
                            <Nav.Link className={css.navLinks} href="/"><AiOutlineHome /> בית</Nav.Link><hr />
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}
export default NavBar;