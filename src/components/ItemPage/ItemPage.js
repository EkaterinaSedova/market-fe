import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Items.Module.css'
import { toggleEditItemForm } from '../../store/ItemSlice/itemSlice';
import { toggleFeedbacksForm } from '../../store/ReviewSlice/reviewSlice';

const ItemPage = () => {

    const dispatch = useDispatch();

    const { product, isProduct } = useSelector(({ items }) => items);
    const { service } = useSelector(({ items }) => items);

    const variants = product.variants || []

    const canEdit = currentUser.isAdmin || currentUser.userId === product.ownerId || currentUser.userId === service.ownerId;
    const item = product || service;
    const handleEditClick = () => {
        dispatch(toggleEditItemForm(true))
    }
    const handleFeedbacksClick = () => {
        dispatch(toggleFeedbacksForm(true))
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.details}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p className={styles.price}>{item.price}</p>
                    {isProduct && (
                        <div className={styles.variants}>
                            {variants.map((variant, index) => (
                                <button key={index} className={styles.variantBtn}>
                                    {variant}
                                </button>
                            ))}
                        </div>
                    )}
                    {canEdit && (
                        <button className={styles.editBtn} onClick={() => handleEditClick}>Изменить</button>
                    )}
                    <button className={styles.editBtn} onClick={() => handleFeedbacksClick}>Изменить</button>
                </div>
            </div>
            <ModalEditItem />
            <ModalFeedbacks />
        </>
    );
};

export default ItemPage;