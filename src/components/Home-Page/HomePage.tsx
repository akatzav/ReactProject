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
import { Footer } from '../footer/Footer'

type HeaderProps = {
    title: string;
    description: string
}

export const HomePage = ({ title,  description }: HeaderProps) => {

    return (
        <div className={css.homePage} >

            <br />
            <br />
            <div className={css.tAd}>
                <h1 className={css.title}>{title}</h1>
                <p className={css.description}><br />!האתר האולטימטיבי למסעדות כשרות<br />
                    .אתר זה נועד במיוחד בשבילך על מנת להקל את תהליך חיפוש אחר מסעדות כשרות בדרום<br />
                    .תוכלו למצוא לחפש מאפיינים מסויימים ולקבל את המענה הרצוי<br />
                    </p>
            </div>
                
            <br /><br /><Footer /><br /><br /><br /><br /><br /><br /><br /><br />
            
        </div>
    )
}