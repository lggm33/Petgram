import React from 'react'
import './styles.css'

function ErrorPage({error}) {
  return (
    <>
      <h1>Oopps!!</h1>
        <h2 style={{marginBottom: '50px'}}>{error} <b>:(</b></h2>
        <div className="gears">
        <div className="gear one">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear two">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear three">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
