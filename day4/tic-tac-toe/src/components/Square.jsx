import React from 'react'

const Square = (props) => {
  return (
    <button className='square' onclick={props.onClick}>{props.value}</button>
  )
}

export default Square