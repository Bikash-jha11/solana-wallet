import React, { useEffect } from 'react'
import { IoArrowBack } from "react-icons/io5";
import styles from '../styles/Seed.module.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generatemnemonic } from '../web3/functions/mnemonic'


function Seed() {
    const navigate = useNavigate();
    const [seed, setSeed] = useState<string[]>([])

    const { word } = generatemnemonic();

     
    useEffect(() => {
        setSeed(word)
        console.log(word)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <button className={styles.btn}>
                        <IoArrowBack className={styles.icon1} onClick={() => navigate('/')} />
                    </button>

                    <p className={styles.name}>Krypton</p>
                    <p></p>
                </div>
                <div className={styles.middle_section}>
                    <p>Please keep these secret key properly.</p>
                    <div className={styles.grid_container}>

                        {/* <div className={styles.grid_item}><p className={styles.seed_text}>cricket</p></div> */}


                        {
                            seed.map((item, key) => (
                                <div key={key} className={styles.grid_item}><p className={styles.seed_text}>{item}</p></div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.bottom_section}>
                    <Link to="/dashboard"><button className={styles.bottom}><p className={styles.btn_text}>Generate Wallet</p></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Seed