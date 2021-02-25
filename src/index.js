import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/store";
import App from './App';
import {Provider} from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Provider>,
  document.getElementById('root')
);
