import React from 'react';
import Header from '../Header/Header'
import styles from './Profile.module.css'

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { user, currentUser } = useSelector(({ users }) => users);
    const isEditable = currentUser.id === user.id;
    useEffect(() => {
        (async () => {
            await dispatch(getUser({id}));
            if(+currentId === id) await dispatch(getBookingsOfUser({
                id: id
            }))
            else await dispatch(getBookingsOfUser({
                id: currentId
            }))
        })()
    }, [dispatch])
    
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
                {isEditable && <button className={styles.editButton}>Изменить</button>}
            </div>
        </>
    );
};

export default ProfilePage