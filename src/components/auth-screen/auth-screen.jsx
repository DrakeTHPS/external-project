import React from 'react';
import styles from './auth-screen.module.css'
import {useHistory} from "react-router";

const AuthScreen = () =>{
    const history = useHistory();
    return(
        <div className={styles.container}>
            <div className={styles.fill}></div>
            <div className={styles.authorization}>
                <div className={styles.authorizationBlock}>
                    <h1>Войти</h1>
                    <input placeholder="Логин"/>
                    <input placeholder="Пароль"/>
                    <button class={"submit_button"} onClick={() => history.push("/main/registry")}>Войти</button>
                </div>
                <div className={styles.version}>ver: 0.5.2</div>
            </div>
        </div>
    )
}

export default AuthScreen;