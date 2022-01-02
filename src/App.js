import React, { useState } from 'react';

import UserInput from './components/Users/UserInput/UserInput';
import UserList from './components/Users/UserList/UserList';

function App() {
    const [users, setUsers] = useState([
        {
            username: 'Henslo',
            age: '30',
            id: '1E3',
        }
    ])

    const updateUsers = userData => {
        setUsers(prevProps => [
            {
                username: userData.username,
                age: userData.age,
                id: userData.id,
            },
            ...prevProps,
        ])
    }

    const deleteUser = userId => {
        setUsers(prevProps => prevProps.filter(user => user.id !== userId))
    }

    return (
        <div>
            <UserInput onUpdateUsers={updateUsers} />
            <UserList users={users} onDeleteUser={deleteUser} />
        </div>
    );
}

export default App;
