import React from 'react'

const Card = (props) => {
  // console.log(cards);
  
  return (
   <> {props.cards.map((card)=>(
    <div key={Math.random()*1000000000} className='card'>
        <div>{card.date}{` `}<img src={card.logo} alt="" /></div>
        <button>Case Study</button>
        <h1>{card.heading}</h1>
        <h2>{card.subheading}</h2>
        <div><h3>{card.devices}</h3><div>Arrow</div></div>

    </div>))}
    </>
  )
}

export default Card