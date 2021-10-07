import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import styles from "./new.module.css";

function Todo(props) {
  const [ModalOpen, setModalOpen] = useState(false);

  function ModalHandler() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className={styles.card}>
      <h2>{props.name}</h2>
      <p>
        This is a simple application where I am trying to learn the concepts of
        React hooks and props.
      </p>
      <p>
        Although, there isn't much functionality, it was best for me to practice
        and learn. The UI is shit too XD
      </p>
      <div className={styles.action}>
        <button className={styles.btn} onClick={ModalHandler}>
          Delete
        </button>
      </div>

      {ModalOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
      {ModalOpen && <Backdrop onClick={closeModal} />}
    </div>
  );
}

export default Todo;
