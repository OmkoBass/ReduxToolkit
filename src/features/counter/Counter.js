import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    decrementByAmount,
    getCount,
    getLoad
} from "./counterSlice";

import { Button, Input } from "@chakra-ui/react";

function Counter() {
    const [value, setValue] = useState(null);

    const count = useSelector(getCount);
    const loading = useSelector(getLoad);
    const dispatch = useDispatch();

    return <div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            fontWeight: 'bold'
        }}>
            <h1> { count }</h1>

            <div>
                <Input style={{ width: '320px' }} placeholder='Value' onChange={e => setValue(parseInt(e.target.value))}/>
                <Button
                    onClick={() => dispatch(incrementByAmount(value))}
                >
                    Add
                </Button>
                <Button
                    onClick={() => dispatch(decrementByAmount(value))}
                >
                    Subtract
                </Button>
            </div>

            <div>
                <Button
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </Button>

                <Button
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </Button>

                <Button
                    isLoading={loading}
                    onClick={() => dispatch(incrementAsync())}
                >
                    Async increment
                </Button>
            </div>
        </div>
    </div>
}

export default Counter;
