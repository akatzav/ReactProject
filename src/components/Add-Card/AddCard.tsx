import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hook';
import Swal from 'sweetalert2';
import { Card, addCard, Kosher } from '../../features/cards/cardSlice';
import { v4 } from "uuid";
import '../../themed-bootstrap.scss'
import { useNavigate } from 'react-router-dom';
import RestaurantList from '../../pages/card-list/RestaurantList';
import Restaurant from '../../pages/card-item/Restaurant';
import { restaurants } from '../../services/restaurant/restaurant';
import Modal from "react-modal";
import { Footer } from '../footer/Footer';
import { HomePage } from '../Home-Page/HomePage';
import css from './addCard.module.scss'

export const AddCard = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [kosher, setKosher] = useState("");
    const [status, setStatus] = useState("");
    const [link_rest, setLink_rest] = useState("");
    const [phone, setPhone] = useState("");
    const [img, setImg] = useState("");

    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const [isOpen, setOpen] = useState(false);
    Modal.setAppElement("#root");

    const closeModal = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };


    return (
        <>
                <div className='card1'>
                </div>
            
            <div className={css.add} dir='rtl'>
                <h1 className={css.title2}>הוספת מסעדה:</h1>
                <hr />
                <label htmlFor="">שם:</label>
                <input className="w-100%" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                <br />
                <label htmlFor="">עיר:</label>
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} />
                <br />
                <label htmlFor="">רחוב:</label>
                <input value={street} onChange={(e) => setStreet(e.currentTarget.value)} />
                <br />
                <label htmlFor="">כשרות:</label>
                <select
                    value={kosher}
                    name="kosher"
                    id="kosher"
                    onChange={(e) => {
                        const cat = e.currentTarget.value as Kosher;
                        setKosher(cat);
                    }}
                >
                    <option value="בחירה">בחר</option>
                    <option value="כשר">כשר</option>
                    <option value="מהדרין">מהדרין</option>
                    <option value="מחפוד">מחפוד</option>
                    <option value="רבנות">רבנות</option>
                    <option value="בדץ בית יוסף">בדץ בית יוסף</option>
                    <option value="בדץ">בדץ</option>
                </select>
                <br />
                <label htmlFor="">סטטוס:</label>
                <input value={status} onChange={(e) => setStatus(e.currentTarget.value)} />
                <br />
                <label htmlFor="">קישור לאתר:</label>
                <input value={link_rest} onChange={(e) => setLink_rest(e.currentTarget.value)} />
                <br />
                <label htmlFor="">טלפון:</label>
                <input value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
                <br />
                <label htmlFor="">תמונה:</label>
                <input value={img} onChange={(e) => setImg(e.currentTarget.value)} />
                <br />
                <button className={css.added}
                    onClick={() => {
                        const card: Card = {
                            id: v4(),
                            name: name,
                            city: city,
                            street: street,
                            kosher: kosher,
                            status: status,
                            link_rest: link_rest,
                            phone: phone,
                            img: img,
                        };
                        dispatch(addCard(card));
                        console.log();
                        Swal.fire("success", "", "success").then((e) => closeModal());
                        <div className="d-flex flex-wrap justify-content-center mx-auto w-75">
                            {restaurants.map((a) => (
                                <Restaurant key={a.id} {...a} />
                            ))}
                        </div>
                    }}
                >
                    הוסף
                </button>
                <br />
            </div>
        </>
    )
}
export default AddCard;