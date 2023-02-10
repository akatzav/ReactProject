import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hook';
import Swal from 'sweetalert2';
import { Card, addCard, Kosher } from '../../features/cards/cardSlice';
import { v4 } from "uuid";
import '../../themed-bootstrap.scss'
import { useNavigate } from 'react-router-dom';
import RestaurantList from '../../pages/card-list/RestaurantList';
import Restaurant from '../../pages/card-item/Restaurant';
import { restaurants } from '../../services/restaurant';

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

    function closeModal(): any {
        throw new Error('Function not implemented.');
    }

    return (
        <>

            <div className='card1'>
                <h2 className="p-3">:הוסף מסעדה</h2>
            </div>
            <div className="add" dir='rtl'>
                <hr />
                שם:
                <br />
                <input className="w-100%" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                <br />
                עיר:
                <br />
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} />
                <br />
                רחוב:
                <br />
                <input value={street} onChange={(e) => setStreet(e.currentTarget.value)} />
                <br />
                כשרות:
                <br />
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
                    {/* <option value="7">softDrink</option>
                        <option value="8">coffee</option>  */}
                </select>
                <br />
                <br />
                סטטוס:
                <br />
                <input value={status} onChange={(e) => setStatus(e.currentTarget.value)} />
                <br />
                קישור לאתר:
                <br />
                <input value={link_rest} onChange={(e) => setLink_rest(e.currentTarget.value)} />
                <br />
                טלפון:
                <br />
                <input value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
                <br />
                תמונה:
                <br />
                <input value={img} onChange={(e) => setImg(e.currentTarget.value)} />
                <br />
                <br />
                <button
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
                        //dispatch addCard(card)
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
                    Add Card:
                </button>
            </div>

        </>
    )
}
export default AddCard;