import React from 'react'
import { Fragment } from 'react';

const ClassList = props => {
    let classes = props.classes.map((c, i)=> {
        let month = c.start.slice(4,7)
        let nDate = c.start.slice(7,10)
        return (
            <div key={c._id} style={{ color: 'white', fontSize: '3rem' }}>
                {console.log('hey', month)}
                <h3>{`${c.day} ${Math.abs(month)} ${Math.abs(nDate)}`}</h3>
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
