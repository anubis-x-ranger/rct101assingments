import React from 'react'
import Button from './Button';
import Date_Logo from './Date_Logo';
import Headings from './Headings';
import styles from './card.module.css';
import {FaArrowRight} from "react-icons/fa"

const Card = (props) => {
  // console.log(cards);
  return (
   <> 
   {props.cards.map((card)=>(
      <div key={Math.random()*1000000000} className={styles.card} style={{background:card.color}}>
          <Date_Logo date={card.date} logo={card.logo} />
          <Button/>
          <Headings heading={card.heading} subheading={card.subheading} />
          <div className={styles.container}>
            <h3>{card.devices}</h3>
            <div><FaArrowRight/></div>
          </div>
      </div>
    ))}
    </>
  )
}

export default Card