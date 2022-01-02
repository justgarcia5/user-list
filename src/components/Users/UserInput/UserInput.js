import React, { useState } from 'react';

import UserForm from './UserForm';
import Modal from '../../UI/Modal';

export default function UserInput(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorMessage, setErrorMessage] = useState()

    const usernameChangeHandler = e => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = e => {
        setEnteredAge(e.target.value)
    }

    const formSubmitHandler = e => {
        e.preventDefault();

        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            setErrorMessage({
                title: 'Invalid Input',
                message: 'Please enter a valid Username and Age (cannot be blank).',
            })
            return;
        }

        if(parseInt(enteredAge) < 1) {
            setErrorMessage({
                title: 'Invalid Age',
                message: 'Please enter a valid Age (number greater than 0).',
            })
            return;
        }

        const user = {
            username: enteredUsername,
            age: enteredAge,
            id: Math.random().toString(),
        }

        props.onUpdateUsers(user);
        setEnteredUsername('');
        setEnteredAge('');
        setErrorMessage('');
    }

    const closeModal = () => {
        setErrorMessage(null);
    }

    return (
        <div>
            {errorMessage && <Modal onCloseModal={closeModal} errorMessage={errorMessage} />}
            <UserForm
                enteredAge={enteredAge}
                enteredUsername={enteredUsername}
                onFormSubmitHandler={formSubmitHandler}
                usernameChangeHandler={usernameChangeHandler}
                ageChangeHandler={ageChangeHandler}
            />
        </div>
    )

}