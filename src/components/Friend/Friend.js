import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props.friend);
    const { name, email, id } = props.friend;

    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url)
    }

    return (
        <Box boxShadow={2} border={1} m={2} p={2} borderRadius="borderRadius" color="primary">
            <h2>Name: {name} </h2>
            <p>Email: {email} </p>
            <p><Link to={`/friend/${id}`}>Show details of {id} </Link></p>
            <br />
            <Button variant="contained" color="secondary"
                onClick={() => handleClick(id)}
            >
                Details
            </Button>
        </Box>
    );
};

export default Friend;