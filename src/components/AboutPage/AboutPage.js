import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { REGISTRATE_ROUTE } from '../../routing/paths';
import Header from '../Header/Header';
import styles from './About.styles.css';

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <h1 className={styles.title}>EXAMPLE STORE</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className={styles.registerBtn} onClick={navigate(REGISTRATE_ROUTE)}>Зарегистрироваться</button>
            </div>
        </>
    );
};

export default AboutPage;