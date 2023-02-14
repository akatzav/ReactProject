import { useAppSelector } from "../../app/hook";
import CardItem from "../card-item/Restaurant";
import css from './restaurantList.module.scss'


const RestaurantList = () => {
    const cards = useAppSelector((s) => s.card.cards);
    return (
        <div className={css.pageRes}>
        <div className={css.cards} >
            {cards.map((r) => (
                <CardItem {...r} key={r.id} />
            ))}
        </div>
        </div>
    )
}

export default RestaurantList;