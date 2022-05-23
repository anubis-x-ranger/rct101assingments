import React from 'react'

const Card = (props) => {
  // console.log(cards);
  
  return (
   <> {props.cards.map((card)=>(
    <div key={Math.random()*1000000000} className='card'>
        <img src={card.logo} alt="" />

    </div>))}
    </>
  )
}

export default Card