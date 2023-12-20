import React from 'react';
import Avatar from 'react-avatar';

const Client = ({username, isCurrentUser }) => {
    return (
        <div className="client">
           
            <Avatar name={isCurrentUser? 'ME' : username} size={50} round="14px" />
            <span className="userName">{isCurrentUser? `Me(${username})` : username}</span>
        </div>
    );
};

export default Client;
