import React from 'react'
import './LineHead.css'

const LineHead = ({title}) => {
  return (
    <>
        <div className="linehead">
            <span className="line"></span>
            <h3>{title}</h3>
        </div>
    </>
  )
}

export default LineHead