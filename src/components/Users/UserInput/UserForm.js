import styles from './UserForm.module.css';

import Button from '../../UI/Button'
import Card from '../../UI/Card';

export default function UserForm(props) {
    return (
        <Card className={styles.input}>
            <form onSubmit={props.onFormSubmitHandler}>
                <label >Username:</label>
                <input
                    htmlFor='username'
                    onChange={props.usernameChangeHandler}
                    value={props.enteredUsername}
                    type='text'
                />
                <label>Age:</label>
                <input
                    htmlFor='age'
                    onChange={props.ageChangeHandler}
                    value={props.enteredAge}
                    type='number'
                    />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}