
import { useAppSelector } from "../../app/hook";
import { AddCard } from "../../components/Add-Card/AddCard";
import { Footer } from "../../components/footer/Footer";
import CardItem from "../card-item/Restaurant";
import css from './restaurantList.module.scss'


const RestaurantList = () => {
    const cards = useAppSelector((s) => s.card.cards);
    return (
        <>
            <AddCard />

            <div className={css.pageRes}>
                <div className={css.cards} >
                    {cards.map((r) => (
                        <CardItem {...r} key={r.id} />
                    ))}
                    <br /><br /><br /><br />
                </div>
            </div>

            
        </>
    )
}

export default RestaurantList;