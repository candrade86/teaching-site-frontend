import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent } from '../actions';
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
    Logout
} from '../styled-components/Scheduler';

import jwt_decode from 'jwt-decode';

const localizer = Calendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

let API_URL = process.env.NODE_ENV === 'production'
?  process.env.REACT_APP_API_URL_PROD
: process.env.REACT_APP_API_URL_DEV;

class Scheduler extends Component {
    constructor(props) {
        super(props)
        this.state = {
          events: this.props.events
        }
    
        this.moveEvent = this.moveEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
      }
    
      componentDidMount() {
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

 
      handleSelect = ({ start, end }) => {
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

        const title = username;
        const diff = Math.abs((start - end) / 60000);

        if (diff <= 60){
          if (diff === 30){
              end = new Date(end.getTime() + 1800000)
            let eventProps = {
              title, 
              start,
              end
          }
            this.props.createEvent(eventProps, ()=> {
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
                this.setState({ events: newEvents });
              })

            })
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
          let id = idArr.filter(i => i !== undefined)

          if (id){
            this.props.deleteEvent(id, () => {
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
                this.setState({ events: newEvents });
              })
            });
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
          this.props.updateEvent(id, {...event, start, end}, ()=> {
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
            })
          })
        // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
        }
      }

      eventStyleGetter = (event, start, end, isSelected) => {
        const token = localStorage.getItem("token");
        let fbToken = localStorage.getItem("fbToken");
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
        {spinner}
      
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
            style={{ fontSize: '2rem', height: '90vh', width: '100%', background: 'white' }}
            views={{ week: true, day: true }}            
          />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
      events: state.event.events,
      deletingEvent: state.event.deletingEvent,
      fetchingEvents: state.event.fetchingEvents,
      creatingEvent: state.event.creatingEvent,
      updatingEvent: state.event.updatingEvent
  };
}

export default connect(mapStateToProps, { createEvent, deleteEvent, updateEvent })(requireAuth(Scheduler));