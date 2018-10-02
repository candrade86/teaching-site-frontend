import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut, fetchEvents, createEvent } from '../actions';
import requireAuth from '../hoc/requireAuth';

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

const token = localStorage.getItem("token");
const decoded = jwt_decode(token);
let  username = decoded.username

class Scheduler extends Component {
    constructor(props) {
        super(props)
        this.state = {
          events: this.props.events
        }
    
        this.moveEvent = this.moveEvent.bind(this)
      }
    
      componentDidMount() {
        this.props.fetchEvents()
      }

      componentWillReceiveProps(nextProps){
        
        if(nextProps.events !== this.props.events){
          let newEvents = nextProps.events.map((e)=> {
            return {
             title: e.title,  
             end: new Date(e.end),
             start: new Date(e.start)
            }
          })
          this.setState({events: newEvents})
        }
      }

      handleSelect = ({ start, end }) => {
        const title = username;
        
        let eventProps = {
          title, 
          start,
          end
        }
        this.props.createEvent(eventProps)       
      }

      moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
        const { events } = this.state
    
        const idx = events.indexOf(event)
        let allDay = event.allDay
    
        if (!event.allDay && droppedOnAllDaySlot) {
          allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
          allDay = false
        }
    
        const updatedEvent = { ...event, start, end, allDay }
    
        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)
    
        this.setState({
          events: nextEvents,
        })
    
        alert(`${event.title} was dropped onto ${updatedEvent.start}`)
      }
    
      resizeEvent = ({ event, start, end }) => {
        const { events } = this.state
    
        const nextEvents = events.map(existingEvent => {
          return existingEvent._id == event._id
            ? { ...existingEvent, start, end }
            : existingEvent
        })
    
        this.setState({
          events: nextEvents,
        })
    
        alert(`${event.title} was resized to ${start}-${end}`)
      }

  render() {

    return (
      <Container>
          <Header>
          <Logout 
            onClick={()=> this.props.signOut(()=> {
              this.props.history.push('/signin');
            })
          }> 
            Logout as {username}
          </Logout>
          </Header>
          <DragAndDropCalendar
            selectable
            culture={moment.tz.guess()}
            localizer={localizer}
            events={this.state.events}
            onEventDrop={this.moveEvent}
            resizable
            onEventResize={this.resizeEvent}
            onSelectSlot={this.handleSelect}
            onSelectEvent={event => alert(event.title)}
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
      events: state.event.events
  };
}

export default connect(mapStateToProps, { fetchEvents, createEvent })(requireAuth(Scheduler));