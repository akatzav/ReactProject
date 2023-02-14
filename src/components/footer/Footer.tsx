import React from 'react'
import css from './footer.module.scss'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
export const Footer = () => {
    return (
        <div>
            <ul className={css.credit}>
                <li>
                    <HiOutlineMailOpen className={css.icon}/><br /> Avigailkatzav@gmail.com
                </li>
                <li>
                    <AiOutlineWhatsApp className={css.icon} /><br /> 0548771139
                </li>
                <li>
                    <MdOutlineDriveFileRenameOutline className={css.icon} /> <br />Avigail Katzav
                </li>
            </ul>
            
<br />
        </div>
    )
}
