import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut, createEvent, deleteEvent, updateEvent } from '../actions';
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


        fetch("http://localhost:5000/api/event")
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

      componentDidUpdate() {
        fetch("http://localhost:5000/api/event")
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
      }

      handleSelect = ({ start, end }) => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        let  username = decoded.username;
        
        const title = username;
        const diff = Math.abs((start - end) / 60000);
        
        if (diff <= 60){
        let eventProps = {
          title, 
          start,
          end
        }
          this.props.createEvent(eventProps)
        }
      }       
    

      removeEvent(event) {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        let username = decoded.username;

        if(event.title === username){
        const { events } = this.state;
        let idArr = events.map((e)=> {
          if (e.start === event.start) {
            return e._id;
          }
        });
          let id = idArr.filter(i => i !== undefined)

          if (id){
            this.props.deleteEvent(id);
          }
        };
      };

      moveEvent({ event, start, end }) {        
        let id = event._id;
        const updatedEvent = { ...event, start, end }
        this.props.updateEvent(id, {...event, start, end})

        // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
      }
    
      resizeEvent = ({ event, start, end }) => {
        let id = event._id;
        const updatedEvent = { ...event, start, end }
        this.props.updateEvent(id, { ...event, start, end })
    
        // alert(`${event.title} was resized to ${start}-${end}`)
      }

  render() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    let  username = decoded.username;

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
            // resizable
            onEventResize={this.resizeEvent}
            onSelectSlot={event => this.handleSelect(event)}
            onDoubleClickEvent={event => this.removeEvent(event)}
            // onSelectEvent={event => alert(event.title)}
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

export default connect(mapStateToProps, { createEvent, deleteEvent, updateEvent, signOut })(requireAuth(Scheduler));