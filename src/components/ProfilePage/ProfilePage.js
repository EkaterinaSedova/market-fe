import React from 'react';
import { toggleForm } from '../../store/UserSlice/userSlice';
import Header from '../Header/Header'
import styles from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import { getProducts, toggleCreateItemForm } from '../../store/ItemSlice/itemSlice';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { user, currentUser } = useSelector(({ users }) => users);
    const {page, setPage} = useState(1);
    const isEditable = currentUser.id === user.id;
    useEffect(() => {
        (async () => {
            await dispatch(getUser({id}));
            await dispatch(getProducts({
                id: id,
                page: page,
            }));
            await dispatch(getServices({
                id: id,
                page: page,
            }));
        })()
    }, [dispatch])

    const handleEditClick = () => {
        dispatch(toggleForm(true))
    }

    const handleAddClick = () => {
        dispatch(toggleCreateItemForm);
    }


    return (
        <>
            <Header />
            <div className={styles.container}>
                <img src={user.image} alt="Profile" className={styles.profileImage} />
                <h1 className={styles.profileName}>{user.name}</h1>
                <div className={styles.details}>
                    <p><strong>Дата рождения:</strong> {user.details.birthdate}</p>
                    <p><strong>Имя:</strong> {user.details.firstname}</p>
                    <p><strong>Фамилия:</strong> {user.details.surname}</p>
                    <p><strong>Телефон:</strong> {user.details.phone}</p>
                    <p><strong>Пол:</strong> {user.details.sex}</p>
                    <p><strong>Роль:</strong> {user.role}</p>
                </div>
                {isEditable && <button className={styles.editButton} onClick={() => handleEditClick}>Изменить</button>}
                {isEditable && <button className={styles.editButton} onClick={() => handleAddClick}>Добавить товар/услугу</button>}
                <div className={styles.main}>
                    <h2>Products</h2>
                    <div className={styles.productList}>
                        {products.map((product, index) => (
                            <div className={styles.product} key={index}>
                                <NavLink to={ITEM_ROUTE + `/${product.id}`} className={styles.productName}>{product.name}</NavLink>
                                <p>{product.description}</p>
                                <p className={styles.price}>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.main}>
                    <h2>Products</h2>
                    <div className={styles.productList}>
                        {services.map((product, index) => (
                            <div className={styles.product} key={index}>
                                <NavLink to={ITEM_ROUTE + `/${product.id}`} className={styles.productName}>{product.name}</NavLink>
                                <p>{product.description}</p>
                                <p className={styles.price}>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default ProfilePage