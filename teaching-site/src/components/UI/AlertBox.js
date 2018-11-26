import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { updateUser } from '../../actions'
import { AlertBoxContainer, Button } from '../../styled-components/AlertBox'
import jwt_decode from 'jwt-decode';

let id;
let user;

let viewable;
class AlertBox extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          id: null,
          username: '',
        }
      }

    componentDidMount(){
        if (localStorage.getItem('token')){ 
            let token = localStorage.getItem("token")   
            const decoded = jwt_decode(token)
            
            id = decoded.sub
            user = decoded.username
            this.setState({ id: id, username: user })
        }


        if(localStorage.getItem('fbToken')){
            let token = JSON.parse(localStorage.getItem('fbToken'))
            id = token.sub;
            user = token.username
            this.setState({ id: id, username: user })
     }
    }

    onClickButton = (type) => {
        this.props.updateUser({id: this.state.id, packageType: `${type}`, total: -1 })
    }

    render() {
        return (
            <AlertBoxContainer>
                <h1 style={{fontSize: '4rem'}}> Choose a class type: </h1>
                <Button onClick={()=> this.onClickButton('conversation')}> Conversation </Button>
                <Button onClick={()=> this.onClickButton('pronunciation')}> Pronunciation </Button>
            </AlertBoxContainer>
        )
    }

}

export default connect(null, {updateUser})(withRouter(AlertBox))