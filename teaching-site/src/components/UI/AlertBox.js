import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { updateUser } from '../../actions'
import { AlertBoxContainer, Button, H1 } from '../../styled-components/AlertBox'
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
        let Alert;

        if(this.props.currentUser.classType.conversation === 0 && this.props.currentUser.classType.pronunciation === 0){
          Alert = <div style={{height: '20vh', width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center'}}> <H1 onClick={()=> this.props.history.push('/billing')} style={{fontSize: '3rem', padding: '0 1%'}}> Click here to purchase classes </H1> </div>
        } 
        if(this.props.currentUser.classType.conversation > 0 && this.props.currentUser.classType.pronunciation > 0) {
            Alert = (
                <div> 
                    <h1 style={{fontSize: '4rem'}}> Choose a class type: </h1>
                    <Button onClick={()=> this.onClickButton('conversation')}> Conversation </Button>
                    <Button onClick={()=> this.onClickButton('pronunciation')}> Pronunciation </Button>
                 </div>
                )
        }

        return (
            <AlertBoxContainer>
               {Alert}
            </AlertBoxContainer> 
        )
    }

}

function mapStateToProps(state) {
    return {
        currentUser: state.user.user,
    };
  }

export default connect(mapStateToProps, {updateUser})(withRouter(AlertBox))