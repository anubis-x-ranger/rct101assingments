import React from 'react'

const Headings = (props) => {
  return (
    <div>
        <h1>{props.heading}</h1>
        <h2>{props.subheading}</h2>
    </div>
  )
}

export default Headings