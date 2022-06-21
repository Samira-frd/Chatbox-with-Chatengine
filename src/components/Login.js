import React from 'react';
import firebase from "firebase/app";
import { auth } from '../firebase'; 

//Styles
import styles from "./Login.module.css";

//icons
import google from "../assets/google.svg";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Arimas chatbox!</h2>

                <div className={styles.button} 
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <img src={google} alt="google"/>
                    <span>Sign in with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;