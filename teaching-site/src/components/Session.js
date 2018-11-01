import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSession } from '../actions';
import { Top, Middle } from '../styled-components/Session';

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
    // this.setState({ details: this.props.session })
  }

  // componentDidUpdate(prevProps, prevState){
  //   console.log('prevProps', prevState)
  //   if (prevProps.session !== this.state.details) {
  //     this.setState({ details: this.props.session })
  //   }
  // }

  render(){
    return (
      <div>
        <Top />
        <Middle>
        <h1>Class Details page</h1>
        
        <h3 style={{fontSize: '4rem'}}>{this.state.details._id}</h3>
        {console.log('test', this.props.session)}
        {console.log('test2', this.state.details)}
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
