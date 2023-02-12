import React from 'react'
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { GrCircleInformation, GrCircleAlert, GrRestaurant } from 'react-icons/gr'
import { BiFilter } from 'react-icons/bi'
import css from './HomePage.module.scss'
import { IoIosInformationCircleOutline } from 'react-icons/io'

type HeaderProps = {
    title: string;
    logo: string
}

export const HomePage = ( { title, logo }: HeaderProps ) => {
    return (
            <div className={css.homePage}>
            
                <br /><br /><br /><br />
                <div className={css.logoAndTitle}>
                    <img src={logo} className={css.logo} alt="" id="logo" />
                </div>
                <br />
                <div>
                    <p className={css.title}>{title}</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div>
                </div> 
        </div>
    )
}