import React from 'react'
import styles from './headings.module.css'
const Headings = (props) => {
  return (
    <div className={styles.head}>
        <h1>{props.heading}</h1>
        <h2>{props.subheading}</h2>
    </div>
  )
}

export default Headings