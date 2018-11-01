import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSession } from '../actions';
import { Top, Middle, Text } from '../styled-components/Session';

let sessionData;

class Session extends Component{
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.session
    }
  }

  componentDidMount() {
    this.props.fetchSession(this.props.match.params.id)
  }

  render(){
    let monthText;

    let year = this.state.details.start.slice(0,4).toString();
    let month = Math.abs(this.state.details.start.slice(4,7)).toString();
    let nDate = Math.abs(this.state.details.start.slice(7,10)).toString();
    let startTime = new Date(this.state.details.start);
    let endTime = new Date(this.state.details.end);

    let startMinutes = (startTime.getMinutes() != 0 ) ? startTime.getUTCMinutes() : startTime.getUTCMinutes() + '0';
    let endMinutes = (endTime.getMinutes() != 0 ) ? endTime.getUTCMinutes() : startTime.getUTCMinutes() + '0';

    let startingAt = `${startTime.getUTCHours()}:${startMinutes} UTC`;
    let endingAt = `${endTime.getUTCHours()}:${endMinutes} UTC`;  
    console.log('year', year)
    switch(month) {
        case '1': monthText = 'January';
        break;
        case '2': monthText = 'February';
        break;
        case '3': monthText = 'March';
        break;
        case '4': monthText = 'April';
        break;
        case '5': monthText = 'May';
        break;
        case '6': monthText = 'June';
        break;
        case '7': monthText = 'July';
        break;
        case '8': monthText = 'August';
        break;
        case '9': monthText = 'September';
        break;
        case '10': monthText = 'October';
        break;
        case '11': monthText = 'November';
        break;
        case '12': monthText = 'December';
        break;
    }
    return (
      <div>
        <Top />
        <Middle>
          <Text style={{fontSize: '2.7rem', textDecoration: 'underline', fontWeight: '900'}}>English Conversation Practice</Text>
          <Text>{`${this.props.session.day} ${monthText} ${nDate} ${year}`}</Text>
          <Text>{`Lesson Time ${startingAt}-${endingAt}`}</Text>
          <Text>Time Duration: 60 minutes</Text>
        </Middle>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      session: state.event.session
  };
}

export default connect(mapStateToProps, { fetchSession })(Session);
