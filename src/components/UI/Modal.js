import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import Button from '../UI/Button'

const ModalOverlay = props => {
    return (
        <div className={styles.modal} onClick={props.onCloseModal}>
            <div className={styles['modal-content']}>
                <div className={styles['header-div']}>
                    <h1>{props.errorMessage.title}</h1>
                </div>
                <div>
                    <p>{props.errorMessage.message}</p>
                </div>
                <footer className={styles.close} >
                    <Button onClick={props.onCloseModal}>Okay</Button>
                </footer>
            </div>
        </div>
    )
}

export default function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay
                    onClick={props.onCloseModal}
                    errorMessage={props.errorMessage}
                    onCloseModal={props.onCloseModal}
                />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    )
}