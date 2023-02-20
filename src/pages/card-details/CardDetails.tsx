import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { Card, editCard } from "../../features/cards/cardSlice"
import { restaurants } from "../../services/restaurant/restaurant";
import CardItem from "../card-item/Restaurant";
import { IoEnterOutline } from 'react-icons/io5'
import css from './cardDetails.module.scss'


const CardDetails = () => {
    const { id } = useParams();
    const cards = useAppSelector((state) => state.card.cards);
    const cardDetails = cards.find((c) => c.id === id);
    console.log(cardDetails);

    if (cardDetails === undefined) {
        return <Navigate to="/" />
    }

    return (
        <>
        <div dir="rtl" className={css.box} >
            
            <div className={css.text}>
            <h2 id="name">{cardDetails.name}</h2><br />
            <h3>{cardDetails.city}, {cardDetails.street}</h3><br />
            <p>
                {cardDetails.kosher}<br /><br />
                {cardDetails.status}<br /><br />
                טלפון: {cardDetails.phone}
            </p><br />
            <a href={cardDetails.link_rest}>
                <button className={css.btn1}>לאתר המסעדה <IoEnterOutline /></button>
            </a>
                </div>
<img src={cardDetails.img} alt="img" className={css.image1} />
        </div>
        </>
    )
}

export default CardDetails