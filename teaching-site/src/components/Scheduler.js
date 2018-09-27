import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment-timezone';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
    Container
} from '../styled-components/Scheduler';

const localizer = Calendar.momentLocalizer(moment)

const DragAndDropCalendar = withDragAndDrop(Calendar);

class Scheduler extends Component {
    constructor(props) {
        super(props)
        this.state = {
          events: [
              {
              id: 0,
              title: 'Party on Mars',
              start: new Date(2018, 11, 11),
              end: new Date(2018, 11, 11)
              }
          ]
        }
    
        this.moveEvent = this.moveEvent.bind(this)
      }
    
      handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
          this.setState({
            events: [
              ...this.state.events,
              {
                start,
                end,
                title,
              },
            ],
          })
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
    
        // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
      }
    
      resizeEvent = ({ event, start, end }) => {
        const { events } = this.state
    
        const nextEvents = events.map(existingEvent => {
          return existingEvent.id == event.id
            ? { ...existingEvent, start, end }
            : existingEvent
        })
    
        this.setState({
          events: nextEvents,
        })
    
        //alert(`${event.title} was resized to ${start}-${end}`)
      }
    
      // newEvent(event) {
      //   let idList = this.state.events.map(a => a.id)
      //   let newId = Math.max(...idList) + 1
      //   let hour = {
      //     id: newId,
      //     title: 'New Event',
      //     allDay: event.slots.length == 1,
      //     start: event.start,
      //     end: event.end,
      //   }
      //   this.setState({
      //     events: this.state.events.concat([hour]),
      //   })
      // }

  render() {
    return (
      <Container>
          <DragAndDropCalendar
            selectable
            localizer={localizer}
            events={this.state.events}
            onEventDrop={this.moveEvent}
            resizable
            onEventResize={this.resizeEvent}
            onSelectSlot={this.handleSelect}
            onSelectEvent={event => alert(event.title)}
            defaultView={Calendar.Views.WEEK}
            defaultDate={new Date()}
            style={{  background: 'white' }}            
          />
      </Container>
    )
  }
}

export default Scheduler;