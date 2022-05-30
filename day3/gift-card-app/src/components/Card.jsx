import React from 'react'
import Button from './Button'
import Date_Logo from './Date_Logo'
import Headings from './Headings'


const Card = (props) => {
  // console.log(cards);
  
  return (
   <> 
   {props.cards.map((card)=>(
    <div key={Math.random()*1000000000} className={card.color==="bright" ? "orange card":"card dark"}>
        <Date_Logo date={card.date} logo={card.logo} />
        <Button/>
        <Headings heading={card.heading} subheading={card.subheading} />
        <div>
          <h3>{card.devices}</h3>
          <div>Arrow</div>
        </div>
    </div>
    ))}
    </>
  )
}

export default Card