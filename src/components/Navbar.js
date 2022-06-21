import React from 'react';

//Styles
import styles from "./Navbar.module.css";

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div>Arimas Chatbox</div>
            <div className={styles.button} onClick={logoutHandler}>Log out</div>
            
        </div>
    );
};

export default Navbar;