import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment-timezone';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
    Container
} from '../styled-components/Scheduler';

// Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const localizer = Calendar.momentLocalizer(moment)

const DnDCalendar = withDragAndDrop(Calendar);

class Scheduler extends Component {
    state = {
        events:[
            {
                start: new Date(),
                end: new Date(moment().add(1, 'days')),
                title: 'Carlos is amazing'
            }
        ]
    };

    onEventResize = (type, { event, start, end, allDay }) => {
        this.setState(state => {
            state.events[0].start = start;
            state.events[0].end = end;
            return { events: state.events };
        });
    };

    onEventDrop = ({ event, start, end, allday}) => {
        console.log(start);
    };

  render() {
    return (
      <Container>
          <DnDCalendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView='month'
            events={this.state.events}
            onEventDrop={this.onEventDrop}
            onEventResize={this.ondEventResize}
            resizable
            style={{ height: '100vh', background: 'white' }}
          />
      </Container>
    )
  }
}

export default Scheduler;