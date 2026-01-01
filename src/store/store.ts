import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../features/transactionReducer';

export const store = configureStore({
    reducer: { transactionsReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
