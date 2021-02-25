import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    'users/fetchData',
    async () => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');

        return users.json();
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null,
    },
    reducers: {
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
    extraReducers: {
        [getUsers.pending]: state => {
            state.status = 'loading'
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.status = 'success';
        },
        [getUsers.rejected]: state => {
            state.status = 'failed'
        }
    }
});

export const { removeUser } = usersSlice.actions;

export const getUsersState = state => state.users;

export default usersSlice.reducer;
