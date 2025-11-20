import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import sampleTransactionData from '../assets/data';

export interface transactionState {
    id: string,
    date: string,
    merchant: string,
    amount: number,
    currency: string,
    category: string
}

const initialState: transactionState[] = sampleTransactionData;

export const transactionsList = createSlice({
    name: 'transactionsList',
    initialState,
    reducers: {
        addTransaction: (state) => { },
        removeTransaction: (state) => { },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
        updateTransaction: (state) => { },
    },
})

// Action creators are generated for each case reducer function
export const { addTransaction, removeTransaction, updateTransaction } = transactionsList.actions

export default transactionsList.reducer
