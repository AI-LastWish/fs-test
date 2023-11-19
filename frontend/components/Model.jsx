import styles from "./Model.module.css"

function Modal({ setOpen }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          <h1>Are you sure want to leave this page?</h1>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpen(false);
            }}
            id="cancelBtn"
          >
            No
          </button>
          <button>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
