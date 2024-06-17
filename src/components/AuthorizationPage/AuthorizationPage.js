import React, { useState } from 'react';
import { REGISTRATE_ROUTE } from '../../routing/paths';
import Header from '../Header/Header';
import styles from './Auth.module.css';

const AuthorizationPage = () => {

    const [isLogin, setIsLogin] = useState(true);

    const dispatch = useDispatch();
    const [values, setValues] = useState({
        login: "",
        password: "",
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).some((val) => val);

        if (!isNotEmpty) return;

        if(isLogin) dispatch(loginUser(values)); else dispatch(registrateUser(values));
    };

    return (
        <>
            <Header />
            {isLogin ?
                <div>
                    <div className={styles.title}>Войти</div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div>
                            <input
                                type="text"
                                placeholder="логин"
                                name="login"
                                value={values.login}
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="пароль"
                                name="password"
                                value={values.password}
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div
                            onClick={setIsLogin(false)}
                            className={styles.formChange}
                        >
                            Зарегистрироваться
                        </div>
                        <button type="submit" className={styles.confirmButton}>
                            Войти
                        </button>
                    </form>
                </div>
                :
                <div>
                    <div className={styles.title}>Войти</div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div>
                            <input
                                type="text"
                                placeholder="логин"
                                name="login"
                                value={values.login}
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="пароль"
                                name="password"
                                value={values.password}
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div
                            onClick={setIsLogin(true)}
                            className={styles.formChange}
                        >
                            Уже есть аккаунт?
                        </div>
                        <button type="submit" className={styles.confirmButton}>
                            Войти
                        </button>
                    </form>
                </div>
            }
        </>
    );
};

export default AuthorizationPage;