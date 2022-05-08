import React from 'react'

export default function NotFond() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5"> 
      <img  src={process.env.PUBLIC_URL + "/img/404.png"} alt="loading..." />
    </div>
  )
}
