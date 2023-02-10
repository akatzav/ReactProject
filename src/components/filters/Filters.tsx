import { useState } from "react";
import { restaurants } from "../../services/restaurant";
import Restaurant from "../../pages/card-item/Restaurant";



export const Filters = () => {
    // 1. according city:

    const none1 = restaurants.filter(c => c.city === 'none');
    const beerSheva1 = restaurants.filter(c => c.city === 'באר שבע');
    console.log(beerSheva1);
    const ofakim1 = restaurants.filter(c => c.city === 'אופקים');
    console.log(ofakim1);
    const netivot1 = restaurants.filter(c => c.city === 'נתיבות');
    console.log(netivot1);
    const ashkelon1 = restaurants.filter(c => c.city === 'אשקלון');
    console.log(ashkelon1);
    const ashdod1 = restaurants.filter(c => c.city === 'אשדוד');
    console.log(ashdod1);
    const sderot1 = restaurants.filter(c => c.city === 'שדרות');
    console.log(sderot1);
    const [rest, setRest] = useState(restaurants);

    // 2. according kosher:

    const choise11 = restaurants.filter(k => k.kosher === "מחפוד");
    const choise22 = restaurants.filter(k => k.kosher === "בדץ");
    const choise33 = restaurants.filter(k => k.kosher === "מהדרין");
    const choise44 = restaurants.filter(k => k.kosher === "כשר");
    const choise55 = restaurants.filter(k => k.kosher === "יורה דעה");
    const choise66 = restaurants.filter(k => k.kosher === "רבנות");
    const choise77 = restaurants.filter(k => k.kosher === "בית יוסף")
    return (
        <div dir="rtl" className="cardFilter">
            <h4>סנן לפי:</h4>

            <select name="selectCity"
                className="selectFilter"
                onChange={(e) => {
                    let menu = e.currentTarget.value;
                    switch (menu) {
                        case 'choice1': setRest(none1); break;
                        case 'beerSheva': setRest(beerSheva1); break;
                        case 'ofakim': setRest(ofakim1); break;
                        case 'netivot': setRest(netivot1); break;
                        case 'ashkelon': setRest(ashkelon1); break;
                        case 'ashdod': setRest(ashdod1); break;
                        case 'sderot': setRest(sderot1); break;
                    }

                }} >
                <option value="choice1"> בחר עיר</option>
                <option value="beerSheva">באר שבע</option>
                <option value="ofakim">אופקים</option>
                <option value="netivot">נתיבות</option>
                <option value="ashkelon">אשקלון</option>
                <option value="ashdod">אשדוד</option>
                <option value="sderot">שדרות</option>

            </select>
            <br /><br />
            <select name="isAvailable" id="" className="selectFilter"
                onChange={(e) => {
                    let menu2 = e.currentTarget.value;
                    switch (menu2) {
                        case 'choise1': setRest(choise11); break;
                        case 'choise2': setRest(choise22); break;
                        case 'choise3': setRest(choise33); break;
                        case 'choise4': setRest(choise44); break;
                        case 'choise5': setRest(choise55); break;
                        case 'choise6': setRest(choise66); break;
                        case 'choise7': setRest(choise77); break;
                    }

                }}>
                <option value="choise">בחר כשרות</option>
                <option value="choise1">מחפוד</option>
                <option value="choise2">בדץ</option>
                <option value="choise3">מהדרין</option>
                <option value="choise4">כשר</option>
                <option value="choise5">יורה דעה</option>
                <option value="choise6">רבנות</option>
                <option value="choise7">בית יוסף</option>

            </select><br /><br /><br /><br /><br />

            <div className="d-flex flex-wrap justify-content-center mx-auto w-75">
                {rest.map((a) => (
                    <Restaurant key={a.id} {...a} />
                ))}
            </div>
        </div>
    )
}
