import { createSlice } from '@reduxjs/toolkit'
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

export const transactionReducer = createSlice({
    name: 'transactionReducer',
    initialState,
    reducers: {
        updateTransaction: (state, action) => {
            const { id, ...updates } = action.payload;
            const index = state.findIndex(tx => tx.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updates };
            }
        },
        addTransaction: (state, action) => {
            state.push(action.payload);
        },
        removeTransaction: (state, action) => {
            return state.filter(tx => tx.id !== action.payload.id);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTransaction, removeTransaction, updateTransaction } = transactionReducer.actions

export default transactionReducer.reducer
