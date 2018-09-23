import React, { Component } from 'react';
import requireAuth from '../hoc/requireAuth';

class Student extends Component {
  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
      </div>
    )
  }
}

export default requireAuth(Student)