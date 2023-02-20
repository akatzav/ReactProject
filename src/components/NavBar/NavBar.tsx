import React from 'react'
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { GrCircleInformation } from 'react-icons/gr'
import { BiFilter } from 'react-icons/bi'
import css from './NavBar.module.scss'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoRestaurantOutline } from 'react-icons/io5'

export const NavBar = () => {
    return (


        <div className={css.nav}>
            {<Navbar /* fixed="top"  */className="justify-content-center">
                {/* <Container> */}
                    <Nav className={css.nav}>
                        <Nav.Link className={css.navLinks} href="/Filters"> <BiFilter /> סנן לפי</Nav.Link>
                        <Nav.Link className={css.navLinks} href="/RestaurantList"> <IoRestaurantOutline /> מסעדות </Nav.Link>
                        <Nav.Link className={css.navLinks} href="/About"> <IoIosInformationCircleOutline /> אודות</Nav.Link>
                        <Nav.Link className={css.navLinks} href="/"><AiOutlineHome /> בית</Nav.Link>
                    </Nav>
                {/* </Container> */}

            </Navbar>}
            <hr />
        </div>

    )
}

export default NavBar;