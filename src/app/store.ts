import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import cardsReducer from '../features/cards/cardSlice'
export const store = configureStore({
    reducer: {
        //counter: counterReducer,
        card: cardsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
