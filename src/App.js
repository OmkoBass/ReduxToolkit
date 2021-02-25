import React from 'react';

import {useSelector} from "react-redux";

import Counter from "./features/counter/Counter";
import Users from "./features/users/Users";
import Theme from "./features/theme/Theme";

import {getTheme} from "./features/theme/themeSlice";

function App() {
    const theme = useSelector(getTheme);

    return (
        <div
            style={{
                backgroundColor: theme.mode === 'light' ? '#ffffff' : 'darkgray',
                padding: 0,
                margin: 0,
                minHeight: '100vh',
            }}
        >
            <Theme
                style={{ position: 'absolute', right: 0 }}
            />
            <Counter/>
            <Users/>
        </div>
    );
}

export default App;
