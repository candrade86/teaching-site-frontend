import React from 'react'
import { Fragment } from 'react';

const ClassList = props => {
    let classes = props.classes.map((c, i)=> {
        return (
            <div key={c._id} style={{ color: 'white', fontSize: '3rem' }}>
                <h3>{c.day}{c.start}</h3>
            </div>
        )
    })

  return (
    <Fragment>
        <h1 style={{ color: 'white', fontSize: '3rem' }}> Class list will render here</h1>
        {classes}    
    </Fragment>
  )
}

export default ClassList;
