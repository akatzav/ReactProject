import { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { Card, editCard, Kosher } from '../../features/cards/cardSlice';
import { MdOutlineEditNote } from 'react-icons/md'
import css from './editCard.module.scss'
import { Footer } from '../../components/footer/Footer';


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
        <div>
        <div dir="rtl" className={css.edit}>
            <h3 className={css.title1}>עריכת פרטים:</h3>
            <div className=''>
                <label htmlFor="name" className={css.label1}>שם המסעדה:</label>
                <input
                    id="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.currentTarget.value)
                    }}
                    placeholder="name" className={css.input1}
                />
            </div>
            <div className=''>
                <label htmlFor="city" className={css.label1}>עיר:</label>
                <input
                    id="city"
                    value={city}
                    onChange={(e) => {
                        setCity(e.currentTarget.value)
                    }}
                    placeholder="city" className={css.input1}
                />
            </div>
            <div className=''>
                <label htmlFor="street" className={css.label1}>רחוב:</label>
                <input
                    id="street"
                    value={street}
                    onChange={(e) => {
                        setStreet(e.currentTarget.value)
                    }}
                    placeholder="street" className={css.input1}
                />
            </div>
            <label htmlFor="">כשרות:</label>
            <select className={css.select1}
                value={kosher}
                name="kosher"
                id="kosher"
                onChange={(e) => {
                    const cat = e.currentTarget.value as Kosher;
                    setKosher(cat) 
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
            <div className=''>
                <label htmlFor="status" className={css.label1}>סטטוס:</label>
                <input
                    id="status"
                    value={status}
                    onChange={(e) => {
                        setStatus(e.currentTarget.value)
                    }}
                    placeholder="status" className={css.input1}
                />
            </div>
            <div className=''>
                <label htmlFor="link_rest" className={css.label1}>כתובת האתר:</label>
                <input
                    id="link_rest"
                    value={link_rest}
                    onChange={(e) => {
                        setLink_rest(e.currentTarget.value)
                    }}
                    placeholder="link_rest" className={css.input1}
                />
            </div>
            <div className=''>
                <label htmlFor="phone" className={css.label1}>טלפון:</label>
                <input
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.currentTarget.value)
                    }}
                    placeholder="phone" className={css.input1}
                />
            </div>
            <div className=''>
                <label htmlFor="img" className={css.label1}>תמונה:</label>
                <input
                    id="img"
                    value={img}
                    onChange={(e) => {
                        setImg(e.currentTarget.value)
                    }}
                    placeholder="image" className={css.input1}
                />
            </div>
            <br />
            <br />
            <button className={css.editing}
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
            </div>

        
    );
};

export default EditCard