import React from 'react'
import { Fragment } from 'react';

const ClassList = props => {
    let monthText;
    let classes = props.classes.map((c, i)=> {
        let year = c.start.slice(0,4).toString();
        let month = Math.abs(c.start.slice(4,7)).toString();
        let nDate = Math.abs(c.start.slice(7,10)).toString();
        let startTime = new Date(c.start);
        let endTime = new Date(c.end);

        let startMinutes = (startTime.getMinutes() != 0 ) ? startTime.getUTCMinutes() : startTime.getUTCMinutes() + '0';
        let endMinutes = (endTime.getMinutes() != 0 ) ? endTime.getUTCMinutes() : startTime.getUTCMinutes() + '0';

        let startingAt = `${startTime.getUTCHours()}:${startMinutes} UTC`;
        let endingAt = `${endTime.getUTCHours()}:${endMinutes} UTC`;  
        console.log('year', year)
        switch(month) {
            case '1': monthText = 'Jan';
            break;
            case '2': monthText = 'Feb';
            break;
            case '3': monthText = 'Mar';
            break;
            case '4': monthText = 'Apr';
            break;
            case '5': monthText = 'May';
            break;
            case '6': monthText = 'Jun';
            break;
            case '7': monthText = 'Jul';
            break;
            case '8': monthText = 'Aug';
            break;
            case '9': monthText = 'Sep';
            break;
            case '10': monthText = 'Oct';
            break;
            case '11': monthText = 'Nov';
            break;
            case '12': monthText = 'Dec';
            break;
        }

        return (
            <div key={c._id} style={{ color: 'white', fontSize: '3rem' }}>
                <h3>{`${c.day} ${monthText} ${nDate} ${year} ${startingAt}-${endingAt}`}</h3>
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
