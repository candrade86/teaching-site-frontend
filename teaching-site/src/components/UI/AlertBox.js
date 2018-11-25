import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../actions'
import { AlertBoxContainer, Button } from '../../styled-components/AlertBox'
import jwt_decode from 'jwt-decode';

let id;

class AlertBox extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          id: null
        }
      }

    componentDidMount(){
        if (localStorage.getItem('token')){ 
            let token = localStorage.getItem("token");   
            const decoded = jwt_decode(token);
            
            id = decoded.sub;
            this.setState({ id: id })
        }


        if(localStorage.getItem('fbToken')){
            let token = JSON.parse(localStorage.getItem('fbToken'))
            id = token.sub;
            this.setState({ id: id })
     }
    }

    render() {
        return (
            <AlertBoxContainer style={{display: 'none'}}>
                <h1 style={{fontSize: '4rem'}}> Choose a class type: </h1>
                <Button onClick={this.props.updateUser({id: this.state.id, packageType: 'conversation', total: -1 })}> Conversation </Button>
                <Button> Pronunciation </Button>
            </AlertBoxContainer>
        )
    }

}

export default connect(null, {updateUser})(AlertBox)