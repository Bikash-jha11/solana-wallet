import React, { useEffect, useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import styles from '../styles/Dashboard.module.css'
import logo from '../assets/logo.png'
import { FaCirclePlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { generateHDwallet } from '../web3/functions/hd-keys'


interface Keys {
  publickey: string,
  privatekey: string
}

function Dashboard() {

  const [key, setKey] = useState<Keys[]>([]);
  const [i, setI] = useState(0);
  const [seePrivateKeyMap, setSeePrivateKeyMap] = useState({});

  const createnewkey = () => {
    setI((prev) => prev + 1)
  }

    const togglePrivateKey = (index:any) => {
    setSeePrivateKeyMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const { publickey, privatekey } = generateHDwallet(i);
    setKey(prevkey => [...prevkey, { publickey, privatekey }])
  }, [i])


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>
          <button className={styles.btn}>
            <IoArrowBack className={styles.icon1} onClick={() => navigate('/seed')}/>
          </button>

          <p className={styles.name}>Krypton</p>
          <p></p>
        </div>
        <div className={styles.middle_section}>
          <div className={styles.top}>
            <p className={styles.key_text}>Add keys</p>
            <FaCirclePlus style={{ "font": "25px", "color": "pink", "margin-right": "20px" }} onClick={createnewkey} />
          </div>
          <div className={styles.keys}>
            {
              key.map((item, index) => (
                <div key={index} className={styles.key_set}>
                
                  <p className={styles.publicaddress}>{seePrivateKeyMap[index] ? item.privatekey : item.publickey}</p>
                  <IoEye onClick={() => togglePrivateKey(index)} />
                </div>
              ))
            }



          </div>
        </div>
        <div className={styles.bottom_section}>
          <Link to=""><button className={styles.bottom} ><p className={styles.btn_text}>Your Accounts</p></button></Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard