import styles from './UserList.module.css'

import Card from '../../UI/Card';

export default function UserList(props) {

    const deleteUserHandler = id => {
        props.onDeleteUser(id);
    }
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.length === 0 && <h2 style={{ textAlign: 'center' }}>There are no users.</h2>}
                {props.users &&
                    props.users.map(user => {
                        return(
                            <li key={user.id} onClick={() => deleteUserHandler(user.id)}>
                                {user.username} {`(${user.age} years old)`}
                            </li>
                        )
                    })
                }
            </ul>
        </Card>
    )
}