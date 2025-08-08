import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import styles from '../styles/Home.module.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <button className={styles.btn}>
                        <IoArrowBack className={styles.icon1} />
                    </button>

                    <p className={styles.name}>Krypton</p>
                    <p></p>
                </div>
                <div className={styles.middle_section}>
                    <img src={logo} className={styles.logo}></img>
                </div>
                <div className={styles.bottom_section}>
                    <Link to="/seed"><button className={styles.bottom}><p className={styles.btn_text}>Create new Account</p></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home