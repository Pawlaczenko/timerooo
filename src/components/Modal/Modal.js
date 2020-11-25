import React from 'react';
import MyContext from '../../context';
import styles from './Modal.module.scss';

const Modal = ({ header, children }) => {
    return (
        <MyContext.Consumer>
            {
                (context) => (
                    <>
                        <div className={styles.back}></div>
                        <div className={styles.wrapper}>
                            <button onClick={context.closeModal} className={styles.close}>✕</button>
                            <h2 className={styles.header}>{header}</h2>
                            {children}
                        </div>
                    </>
                )
            }

        </MyContext.Consumer>
    );
}

export default Modal;