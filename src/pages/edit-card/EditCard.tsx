import { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { Card, editCard, Kosher } from '../../features/cards/cardSlice';
import { MdOutlineEditNote } from 'react-icons/md'

const EditCard = () => {
    const { id } = useParams();
    const nav = useNavigate();
    //get all the cards from the store:
    const cards = useAppSelector((state) => state.card.cards);
    //dispatch actions:
    const dispatch = useAppDispatch();

    const cardToEdit = cards.find((c) => c.id === id);


    const [name, setName] = useState(cardToEdit?.name ?? "")
    const [city, setCity] = useState(cardToEdit?.city ?? "")
    const [street, setStreet] = useState(cardToEdit?.street ?? "")
    const [status, setStatus] = useState(cardToEdit?.status ?? "")
    const [kosher, setKosher] = useState(cardToEdit?.kosher ?? "")
    const [link_rest, setLink_rest] = useState(cardToEdit?.link_rest ?? "")
    const [phone, setPhone] = useState(cardToEdit?.phone ?? "")
    const [img, setImg] = useState(cardToEdit?.img ?? "")

    if (cardToEdit === undefined) {
        return <Navigate to="/" />
    }


    return (
        <div dir="rtl" className='d-flex card p-3 m-2 justify-content-center aline-item-center h-auto'>
            <h3>עריכת פרטים:</h3>
            <div className='label-input d-flex flex-column'>
                <label htmlFor="name" className='label'>שם המסעדה:</label>
                <input
                    id="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.currentTarget.value)
                    }}
                    placeholder="name"
                />
            </div>
            <br />
            <div className='label-input d-flex flex-column'>
                <label htmlFor="city" className='label'>עיר:</label>
                <input
                    id="city"
                    value={city}
                    onChange={(e) => {
                        setCity(e.currentTarget.value)
                    }}
                    placeholder="city"
                />
            </div>
            <br />
            <div className='label-input d-flex flex-column'>
                <label htmlFor="street" className='label'>רחוב:</label>
                <input
                    id="street"
                    value={street}
                    onChange={(e) => {
                        setStreet(e.currentTarget.value)
                    }}
                    placeholder="street"
                />
            </div>
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
            </select>
            <div className='label-input d-flex flex-column'>
                <label htmlFor="status" className='label'>סטטוס:</label>
                <input
                    id="status"
                    value={status}
                    onChange={(e) => {
                        setStatus(e.currentTarget.value)
                    }}
                    placeholder="status"
                />
            </div>

            <br />
            <div className='label-input d-flex flex-column'>
                <label htmlFor="link_rest" className='label'>כתובת האתר:</label>
                <input
                    id="link_rest"
                    value={link_rest}
                    onChange={(e) => {
                        setLink_rest(e.currentTarget.value)
                    }}
                    placeholder="link_rest"
                />
            </div>
            <br />
            <div className='label-input d-flex flex-column'>
                <label htmlFor="phone" className='label'>טלפון:</label>
                <input
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.currentTarget.value)
                    }}
                    placeholder="phone"
                />
            </div>
            <br />
            <div className='label-input d-flex flex-column'>
                <label htmlFor="img" className='label'>תמונה:</label>
                <input
                    id="img"
                    value={img}
                    onChange={(e) => {
                        setImg(e.currentTarget.value)
                    }}
                    placeholder="image"
                />
            </div>
            <br />
            <button className='btn btn-success'
                onClick={() => {
                    const card: Card = {
                        id: cardToEdit.id,
                        name: name,
                        city: city,
                        street: street,
                        kosher: cardToEdit.kosher,
                        status: status,
                        link_rest: link_rest,
                        phone: phone,
                        img: img,
                    };

                    dispatch(editCard(card));
                    nav(-1)
                }}
            >
                סיום עריכה <MdOutlineEditNote />
            </button>
        </div>
    );
};

export default EditCard