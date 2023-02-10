import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { restaurants } from "../../services/restaurant";

export type Kosher =
    | "כשר"
    | "מהדרין"
    | "מחפוד"
    | "רבנות"
    | "בדץ בית יוסף"
    | "בדץ"


export type Card = {
    id: string;
    name: string;
    city: string;
    street: string;
    kosher: string;
    status: string;
    link_rest: string;
    phone: string;
    img: string;
};



export type CardState = {
    cards: Card[];
};



const initialState: CardState = {
    cards: restaurants,
};


export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        //אילו פעולות אנחנו רוצים לעשות בחנות
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);//הוספה של הקלף --payload
        },
        editCard: (state, action: PayloadAction<Card>) => {
            const cardToEdit = action.payload;
            const index = state.cards.findIndex((c) => c.id === action.payload.id);

            //replace the card at index with:
            state.cards[index] = cardToEdit;
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            const index = state.cards.findIndex((c) => c.id === action.payload);

            //delete the card at index:
            state.cards.splice(index, 1);
        },
    },
});

export const { addCard, editCard, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;