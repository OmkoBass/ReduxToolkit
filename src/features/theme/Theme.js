import React from 'react'

import { useSelector, useDispatch } from "react-redux";

import {
    getTheme,
    switchMode
} from "./themeSlice";

import { Button } from "@chakra-ui/react";

function Theme() {
    const theme = useSelector(getTheme);
    const dispatch = useDispatch();

    return <Button
        style={{ backgroundColor: theme.primary, color: 'white '}}
        onClick={() => dispatch(switchMode())}
    >
        { theme.mode }
    </Button>
}

export default Theme
