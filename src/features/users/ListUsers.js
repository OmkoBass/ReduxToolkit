import React from 'react';

import {Button} from "@chakra-ui/react";

import { useDispatch } from "react-redux";

import {removeUser} from "./usersSlice";

function ListUsers({ users }) {
    const dispatch = useDispatch();

    return <div>
        {
            users.map(({id, name}) => <div key={id}>
                <h2>
                    {name}
                </h2>

                <Button
                    colorScheme="red"
                    onClick={() => dispatch(removeUser(id))}
                >
                    Remove
                </Button>
            </div>)
        }
    </div>
}

export default ListUsers;
