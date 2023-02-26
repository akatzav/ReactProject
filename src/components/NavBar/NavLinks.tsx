import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiFilter } from 'react-icons/bi'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoRestaurantOutline } from 'react-icons/io5'
import css from './NavBar.module.scss'
import { motion } from 'framer-motion'


export const NavLinks = (props: any) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (

        <ul className={css.ul}>
            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }}>
                <a href='/Filters' className={css.a}> <BiFilter /> סנן לפי</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }}>
                <a href='/RestaurantList' className={css.a}> <IoRestaurantOutline /> מסעדות </a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.10 }}>
                <a href='/About' className={css.a}> <IoIosInformationCircleOutline /> אודות</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
                <a href='/' className={css.a}> <AiOutlineHome /> בית</a>
            </motion.li>

        </ul>
    )
}
