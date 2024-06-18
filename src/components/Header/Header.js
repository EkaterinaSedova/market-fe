import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../routing/paths';
import styles from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector(({user}) => user);
    useEffect(() => {
        (async () => {
            if (localStorage.getItem('token')) {
                const {id} = jwt_decode(localStorage.getItem('token'));
                await dispatch(getUser({id}));
            }
        })()
    }, [dispatch])
    const handleLoginClick = () => {
        navigate(LOGIN_ROUTE)
    }

    const handleLogOutClick = () => {
        dispatch(removeUser());
        localStorage.removeItem('token');
    }

    const handleUserClick = () => {
        navigate(PROFILE_ROUTE + `/${currentUser.id}`);
    }

    return (
        <div>
            <header className={styles.headerBlock}>
                <Link to={MAIN_ROUTE} className={styles.headerLogo}>COMPANY NAME</Link>
                    <div className={styles.headerComponents}>
                        <div className={styles.headerComponent}>
                            Hello,
                            {currentUser ?
                                <span className={styles.userName} onClick={handleUserClick}>{currentUser.name}</span>
                                :
                                <span>guest</span>}
                        </div>
                        {currentUser ?
                            <div className={styles.headerButton} onClick={() => handleLogOutClick()}>ВЫЙТИ</div>
                            :
                            <div className={styles.headerButton} onClick={() => handleLoginClick()}>ВОЙТИ</div>}
                    </div>
            </header>
        </div>

)};

export default Header;
