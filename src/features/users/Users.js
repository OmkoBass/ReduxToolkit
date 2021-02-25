import React, {useEffect} from 'react';

import { Button } from "@chakra-ui/react"

import {useSelector, useDispatch} from "react-redux";

import {
    getUsersState,
    getUsers,
} from "./usersSlice";
import ListUsers from "./ListUsers";

function Users() {
    const users = useSelector(getUsersState)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return <div
        style={{
            textAlign: 'center'
        }}
    >
        <Button
            colorScheme="blue"
            onClick={() => dispatch(getUsers())}
            isLoading={users.status === 'loading' ? true : null}
        >
            Fetch again!
        </Button>
        {
            users.status === 'loading'
                ?
                <h1>
                    LOADING...
                </h1>
                :
                users.status === 'success'
                    ?
                    <ListUsers
                        users={users.users}
                    />
                    :
                    <h1>
                        EROL
                    </h1>
        }
    </div>
}

export default Users;
