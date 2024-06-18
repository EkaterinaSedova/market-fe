import React from 'react';
import { useDispatch } from "react-redux"
import { toggleCreateItemForm } from '../../store/ItemSlice/itemSlice';

const ModalEditItem = () => {
    const [values, setValues] = useState({
        prodName: "",
        description: "",
        price: 0,
    })
    const dispatch = useDispatch();

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).some((val) => val);

        if (!isNotEmpty) return;

        dispatch(editItem(values))
    };

    const handleClose = () => {
        dispatch(toggleCreateItemForm(false))
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h4 className={styles.modalTitle}>Изменить товар/сервис</h4>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyBlock}>
                        Название:
                        <input
                            className={styles.modalInput}
                            type='text'
                            maxLength={255}
                            value={prodName}
                            onChange={e => handleChange(e.target.value)}
                        />
                    </div>
                    <div className={styles.modalBodyBlock}>
                        Описание:
                        <input
                            className={styles.modalInput}
                            type='text'
                            maxLength={255}
                            value={description}
                            onChange={e => handleChange(e.target.value)}
                        />
                    </div>
                    <div className={styles.modalBodyBlock}>
                        Цена:
                        <input
                            className={styles.modalInput}
                            type='number'
                            maxLength={16}
                            value={price}
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

export default ModalEditItem;