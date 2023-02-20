import React from 'react'
import css from './about.module.scss'
export const About = () => {
    return (
        <div >
            <p className={css.p2}>.אתר זה נועד על מנת להנגיש לציבור מסעדות בדרום עם מגוון כשרויות טובות יותר או פחות<br />
                ..הנה הסבר קצרצר למה זה חשוב</p>
            <iframe className={css.video} src="https://www.youtube.com/embed/4C3DLbtAU38" title="YouTube video" allowFullScreen></iframe>
        </div>
    )
}
