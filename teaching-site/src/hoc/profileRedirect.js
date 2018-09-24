import React, { Component } from 'react';
import jwt_decode from "jwt-decode";

export default ChildComponent => {
  class ComposedComponent extends Component {
    
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const token = localStorage.getItem("token");

      if (token) {  
        const decoded = jwt_decode(token);
        let username = decoded.username;

        this.props.history.push(`/student/${username}`);
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};