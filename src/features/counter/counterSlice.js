import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        loading: false,
    },
    reducers: {
        increment: state => {
            state.count++;
        },
        decrement: state => {
            state.count--;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.count -= action.payload;
        },
        reset: state => {
            state.count = 0;
        },
        changeLoading: state => {
            state.loading = !state.loading;
        }
    }
});

export const { increment, decrement, incrementByAmount, decrementByAmount, reset, changeLoading } = counterSlice.actions;

export const incrementAsync = amount => dispatch => {
    dispatch(changeLoading());
    setTimeout(() => {
        dispatch(incrementByAmount(amount || 1));
        dispatch(changeLoading());
    }, 1000);
}

export const getCount = state => state.counter.count;

export const getLoad = state => state.counter.loading;

export default counterSlice.reducer;
