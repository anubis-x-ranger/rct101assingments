import React from 'react'

const Links = () => {
    const pages=["Services","Projects","About"]; 

  return (
    <div className="nav-elements">
    {pages.map((pages)=>navLinks(pages))}
    </div>
  )
}

function navLinks(pages){
    return(
        <ul>
            <a><li>{pages}</li></a>
        </ul>
    )
}

export default Links