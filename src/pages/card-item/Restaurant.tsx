import { BsPen, BsTrash } from "react-icons/bs";
import { BiDetail } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { Card, deleteCard } from "../../features/cards/cardSlice";
import Swal from "sweetalert2";
import css from './Restaurant.module.scss'
import { Footer } from "../../components/footer/Footer";
import AddCard from "../../components/Add-Card/AddCard";


const CardItem = (props: Card) => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <>
        <div dir="rtl" className={css.card}>
            <img src={`${props.img}`} alt="image" className={css.image} /><br />

            <div className="body-card">
                {/* <h2>{props.name}</h2> */}
                <hr />
                <p className={css.name}>{props.name}</p>
            </div>

            <div className={css.buttons}>
                <button
                    className={css.edit}
                    onClick={() => {
                        nav(`/cards/edit/${props.id}`);
                    }}
                >
                    <BsPen />
                </button>

                <button
                    className={css.trash}
                    onClick={() => {
                        Swal.fire({
                            title: "Are you sure you want to delete the card?",
                            showDenyButton: true,
                            confirmButtonText: "Yes",
                            denyButtonText: `No`,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteCard(props.id));
                                Swal.fire("Deleted!", "", "success");
                            } else if (result.isDenied) {
                                Swal.fire("Keeping the card", "", "info");
                            }
                        });
                    }}
                >
                    <BsTrash />
                </button>

                <button
                    className={css.details}
                    onClick={() => {
                        nav(`/cards/details/${props.id}`);
                    }}
                >
                    <BiDetail />
                </button>
            </div><br /><br />
  
        </div>
        </>
    );
};

export default CardItem;