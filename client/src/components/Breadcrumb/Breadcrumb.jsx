import React from 'react'
import './Breadcrumb.css'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
  return (
    <>
        <section className='breadHead'>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <h2>{props.title}</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        { props.middle.url ? (<li className="breadcrumb-item"><Link to={props.middle.url}>{props.middle.text}</Link></li>) : ('') }
                        <li className="breadcrumb-item active" aria-current="page">{props.last}</li>
                    </ol>
                </nav>
            </div>
        </section>
    </>
  )
}

export default Breadcrumb