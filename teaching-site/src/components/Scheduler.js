import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent, fetchUser, updateUser } from '../actions';
import AlertBox from './UI/AlertBox';
import requireAuth from '../hoc/requireAuth';
import Spinner from './UI/Spinner';

import Calendar from 'react-big-calendar';
import moment from 'moment-timezone';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
    Container,
    Header,
    Instructions,
    Body,
    AlertWrapper
} from '../styled-components/Scheduler';

import jwt_decode from 'jwt-decode';

const localizer = Calendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

let API_URL = process.env.NODE_ENV === 'production'
?  process.env.REACT_APP_API_URL_PROD
: process.env.REACT_APP_API_URL_DEV;


let newEvents= [];

let disp = 'none'; 

let id;

class Scheduler extends Component {
    constructor(props) {
        super(props)
        this.state = {
          alert: false,
          user: '',
          events: newEvents,
          day: ''
        }
    
        this.moveEvent = this.moveEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
      }
    
      componentDidMount() {
        if(this.props.currentUser.classType.conversation === 0 && this.props.currentUser.classType.pronunciation === 0) {
          disp = 'block';  
        }
  
        if (localStorage.getItem('token')){ 
          let token = localStorage.getItem("token");   
          const decoded = jwt_decode(token);  
          id = decoded.sub;
        }

        if(localStorage.getItem('fbToken')){
          let token = JSON.parse(localStorage.getItem('fbToken'))
          id = token.sub;
        }

        this.props.fetchUser(id, ()=> {
          this.setState({user: this.props.currentUser})
        })
          
        fetch(`${API_URL}/api/event`)
          .then(response => response.json())
          .then(data => {
             newEvents = data.map((e)=> {
              return {
                _id: e._id, 
                title: e.title,  
                end: new Date(e.end),
                start: new Date(e.start)
              }
          })
           if(this._ismounted = true){
            this.setState({ events: newEvents });
           }
        })
        
      }

      componentDidUpdate(prevProps, prevState) {
        if(prevProps.currentUser.classType.conversation > this.props.currentUser.classType.conversation) {
          disp = 'none'
          
          fetch(`${API_URL}/api/event`)
          .then(response => response.json())
          .then(data => {
            let newEvents = data.map((e)=> {
              return {
                _id: e._id, 
                title: e.title,  
                end: new Date(e.end),
                start: new Date(e.start)
              }
          })
          if(this._ismounted = true){
            this.setState({ events: newEvents });
          }
        })
        }

        if (prevProps.events !== this.props.events) {
          fetch(`${API_URL}/api/event`)
          .then(response => response.json())
          .then(data => {
            let newEvents = data.map((e)=> {
              return {
                _id: e._id, 
                title: e.title,  
                end: new Date(e.end),
                start: new Date(e.start)
              }
          })
          if(this._ismounted = true){
            this.setState({ events: newEvents });
          }
        })
       }
      }

      dayOfWeek(start){
      
        let d = new Date(start);
        let weekday = new Array(7);
        weekday[0] = 'Sunday';
        weekday[1] = 'Monday';
        weekday[2] = 'Tuesday';
        weekday[3] = 'Wednesday';
        weekday[4] = 'Thursday';
        weekday[5] = 'Friday';
        weekday[6] = 'Saturday';
      
        return weekday[d.getDay()]
       
          
      }
      
      handleSelect = ({ start, end }) => {
        
          if(this.props.currentUser.classType.conversation > 0 && this.props.currentUser.classType.pronunciation > 0) {
            disp = 'block';  
          }        

          if(this.props.currentUser.classType.conversation > 0 && this.props.currentUser.classType.pronunciation === 0) {
            this.props.updateUser({id: id, packageType: 'conversation', total: -1 })
          }
          
          if(this.props.currentUser.classType.conversation === 0 && this.props.currentUser.classType.pronunciation > 0) {
            this.props.updateUser({id: id, packageType: 'pronunciation', total: -1 })
          }
      
        const token = localStorage.getItem("token");
        let fbToken = localStorage.getItem("fbToken");
        let username;

        if (token) {
          const decoded = jwt_decode(token);
          username = decoded.username;
        }

        if (fbToken) {
          let fbToken = JSON.parse(localStorage.getItem('fbToken'))
          username = `${fbToken.username} #${fbToken.id}`;
        }
       
        let day = this.dayOfWeek(start)
        
        const title = username;
        const diff = Math.abs((start - end) / 60000);

        let current = new Date();
        

        if(start > current) {
        if (diff <= 60){
          if (diff === 30){
              end = new Date(end.getTime() + 1800000)
            let eventProps = {
              title, 
              start,
              end,
              day  
          }

              this.props.createEvent(eventProps)
             // prevent event from being created if user has no classes purchased
          }
        }
        }
      
    
      }       
    
      removeEvent(event) {
        const token = localStorage.getItem("token");
        let fbToken = localStorage.getItem("fbToken");
        let username;

        if (token) {
          const decoded = jwt_decode(token);
          username = decoded.username;
        }

        if (fbToken) {
          let fbToken = JSON.parse(localStorage.getItem('fbToken'))
          username = `${fbToken.username} #${fbToken.id}`;
        }

        if(event.title === username){
        const { events } = this.state;
        let idArr = events.map((e)=> {
          if (e.start === event.start) {
            return e._id;
          }
        });
        let filtered = events.map(e=> {
          if(e.statrt !== event.start){
            return e;
          }
        })
        this.setState({events: filtered})
          let id = idArr.filter(i => i !== undefined)

          if (id) {
            this.props.deleteEvent(id)
          }
        };
      };

      moveEvent({ event, start, end }) {
        const token = localStorage.getItem("token");
        let fbToken = localStorage.getItem("fbToken");
        let username;

        if (token) {
          const decoded = jwt_decode(token);
          username = decoded.username;
        }

        if (fbToken) {
          let fbToken = JSON.parse(localStorage.getItem('fbToken'))
          username = `${fbToken.username} #${fbToken.id}`;
        }

        if(event.title === username){
          const { events } = this.state;
          const idx = events.indexOf(event);
          let id = event._id;
          const updatedEvent = { ...event, start, end }
          const nextEvents = [...events]
          nextEvents.splice(idx, 1, updatedEvent)
          this.setState({ events: nextEvents });
          this.props.updateEvent(id, {...event, start, end })
        }
      }

      eventStyleGetter = (event, start, end, isSelected) => {
        const token = localStorage.getItem("token");
        let fbToken = JSON.parse(localStorage.getItem("fbToken"));
        let username;
      
        let style = {
          backgroundColor: '#6a6b8c'
        }

        if (token) {
          const decoded = jwt_decode(token);
          username = decoded.username;
          
          if(event.title === username){
            style.backgroundColor = '#4a67e8';
          }
        }

        if (fbToken) {
          username = `${fbToken.username} #${fbToken.id}`;
          
          if(event.title === username){
            style.backgroundColor = '#4a67e8';
          }
        }

        return {
          style: style
        }
      }

  render() {

  

    const token = localStorage.getItem("token");
    let fbToken = localStorage.getItem("fbToken");
    let username;

        if (token) {
          const decoded = jwt_decode(token);
          username = decoded.username;
        }

        if (fbToken) {
          let fbToken = JSON.parse(localStorage.getItem('fbToken'))
          username = fbToken.username;
        }

    let spinner;

    if (this.props.fetchingEvents === true || this.props.creatingEvent === true || this.props.deletingEvent === true || this.props.updatingEvent === true ) {
        spinner = <Spinner />;
      }
     
    return (
      <Container>
        {console.log('user', this.props.currentUser)}
        <AlertWrapper style={{display: `${disp}`, position: 'absolute', zIndex: '1'}}>
          <AlertBox />
        </AlertWrapper>

        {spinner}
        <Header />
        <Instructions>
          click to add a class or click twice on event to delete.
        </Instructions>
        <Body>
          <DragAndDropCalendar
            selectable
            showMultiDayTimes={true}
            culture={moment.tz.guess()}
            localizer={localizer}
            events={this.state.events}
            onEventDrop={this.moveEvent}
            onSelectSlot={event => this.handleSelect(event)}
            onDoubleClickEvent={event => this.removeEvent(event)}
            eventPropGetter={event => this.eventStyleGetter(event)}
            defaultView={Calendar.Views.WEEK}
            defaultDate={new Date()}
            style={{ fontSize: '2rem', height: '79vh', width: '100%', background: 'white' }}
            views={{ week: true, day: true }}            
          />
        </Body>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
      currentUser: state.user.user,
      deletingEvent: state.event.deletingEvent,
      fetchingEvents: state.event.fetchingEvents,
      creatingEvent: state.event.creatingEvent,
      updatingEvent: state.event.updatingEvent
  };
}

export default connect(mapStateToProps, { createEvent, deleteEvent, updateEvent, fetchUser, updateUser })(requireAuth(Scheduler));