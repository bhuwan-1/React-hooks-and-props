import React from 'react'
import styles from './new.module.css'

function Modal(props) {

    function cancelHandler(){
        props.onCancel();
    }

    function confirm(){
        props.onConfirm();
    }

    return (
        <div className={styles.modal}>
            <p>Are you sure?</p>
            <div className={styles.btn_container}>
                <button className={styles.btn} onClick={cancelHandler}>Cancel</button>
                <button className={styles.btn} onClick={confirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Modal
