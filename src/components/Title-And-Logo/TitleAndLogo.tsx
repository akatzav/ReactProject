import React from 'react'
import css from './TitleAndLogo.module.scss'


type HeaderProps = {
    title: string;
    logo: string,
    description: string
}
export const TitleAndLogo = ({ title, logo, description }: HeaderProps) => {
    return (
       <>
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
            </>
    )
}
