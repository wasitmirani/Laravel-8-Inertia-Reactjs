import React from 'react';

const UsersComponent = ({users,create_url}) => {
    return (
        <div>
            User Information here cool
            {users.map(user =>

                <p key={user.id}>{ user.name}</p>
            )}
        </div>
    );
};

export default UsersComponent;
