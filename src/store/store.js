import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/users/usersSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
        theme: themeReducer
    }
})
