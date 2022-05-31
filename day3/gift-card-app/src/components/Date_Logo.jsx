import React from 'react'
import styles from './datelogo.module.css'
const Date_Logo = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}> {props.date} </div>
      <div className={styles.img_container}><img src={props.logo} className={styles.img} alt="" /></div>
    </div>
  )
}

export default Date_Logo