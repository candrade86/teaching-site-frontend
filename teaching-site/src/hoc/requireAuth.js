import React, { Component } from 'react';

export default ChildComponent => {
  class ComposedComponent extends Component {
    
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const token = localStorage.getItem('token');
      const fbToken = localStorage.getItem('fbToken');
      
      if (!token) {
        if(!fbToken){
        this.props.history.push('/');
        }
      } 
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};