import React from 'react'

const Date_Logo = (props) => {
  return (
    <div>{props.date}{` `}<img src={props.logo} alt="" /></div>
  )
}

export default Date_Logo