import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { IoEnterOutline } from 'react-icons/io5'
import css from './cardDetails.module.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'

const CardDetails = () => {
    const nav=useNavigate();
    const dispatch = useAppDispatch();

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
            <img src={cardDetails.img} alt="img" className={css.image1} />
            <br />
            <div className={css.text}>
            <h2 id="name">{cardDetails.name}</h2>
            <br />
            <h3>{cardDetails.city}, {cardDetails.street}</h3><br />
            <p>
                {cardDetails.kosher}<br /><br />
                {cardDetails.status}<br /><br />
                טלפון: {cardDetails.phone}
            </p><br />
            <a href={cardDetails.link_rest}>
                <button className={css.btn1}>לאתר המסעדה <IoEnterOutline /></button>
            </a>
            <br />
            <a href="/RestaurantList">
                        <button className={css.btn2} onClick={()=>{
                            nav(-1)}}><IoIosArrowRoundBack /></button>
            </a>
                </div>
        </div>
        </>
    )
}

export default CardDetails