import { useAppSelector } from "../../app/hook";
import CardItem from "../card-item/Restaurant";
import '../../themed-bootstrap.scss'

import '../../image/avaz-hazahav.jpg'
import '../../image/bait-haful.jpg'
import '../../image/barbakar.jpg'
import '../../image/boorgerim.jpg'
import '../../image/cafe-cafe.jpg'
import '../../image/greg.jpg'
import '../../image/librati.jpg'
import '../../image/patrix.jpg'



const RestaurantList = () => {
    const cards = useAppSelector((s) => s.card.cards);
    return (
        <div className="cards ">
            {cards.map((r) => (
                <CardItem {...r} key={r.id} />
            ))}
        </div>
    )
}

export default RestaurantList;