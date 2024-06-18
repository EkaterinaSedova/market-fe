import React, { useState } from 'react';
import { toggleForm } from '../../store/UserSlice/userSlice';
import { useDispatch } from "react-redux"

const ModalEditUser = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",

    })
    const dispatch = useDispatch();

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).some((val) => val);

        if (!isNotEmpty) return;

        dispatch(editUser(values))
    };

    const handleClose = () => {
        dispatch(toggleForm(false))
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h4 className={styles.modalTitle}>Изменить профиль</h4>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyBlock}>
                        Имя:
                        <input
                            className={styles.modalInput}
                            type='text'
                            maxLength={16}
                            value={firstName}
                            onChange={e => handleChange(e.target.value)}
                        />
                    </div>
                    <div className={styles.modalBodyBlock}>
                        Фамилия:
                        <input
                            className={styles.modalInput}
                            type='text'
                            maxLength={16}
                            value={lastName}
                            onChange={e => handleChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <button className={styles.modalBtn} onClick={() => handleSubmit}>Сохранить</button>
                    <button className={styles.modalBtn} onClick={() => handleClose}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};

export default ModalEditUser;