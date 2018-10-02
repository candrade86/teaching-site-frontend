import axios from 'axios';

import {
    SIGNING_UP,
    SIGNING_IN,
    AUTH_USER,
    FETCHING_EVENTS,
    FETCHED_EVENTS,
    CREATING_EVENT,
    CREATED_EVENT,
    DELETING_EVENT,
    DELETED_EVENT,
    ERROR
} from './types';

import jwt_decode from "jwt-decode";

export const signUp = (formProps, callback) => dispatch => {
    dispatch({ type: SIGNING_UP }); 
  
    axios
        .post ('http://localhost:5000/api/authentication/signup', 
        formProps
        )
        .then(response => {
            dispatch({ type: AUTH_USER, payload: response.data.token })
            localStorage.setItem('token', response.data.token);
            callback();
        })
        
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Username already in use.', err})
        });
  };

export const signIn = (formProps, callback) => dispatch => {
    dispatch({ type: SIGNING_IN }); 
  
    axios
        .post ("http://localhost:5000/api/authentication/signin",
        formProps
        )
        .then(response => {
            dispatch({ type: AUTH_USER, payload: response.data.token })
            localStorage.setItem("token", response.data.token)
            callback();
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'User not found.', err})
        });
  
  };  

export const signOut = (callback) => {
    localStorage.removeItem("token");
    callback();
    return {
      type: AUTH_USER,
      payload: ""
    };
  };

export const fetchEvents = () => dispatch => {
    dispatch({ type: FETCHING_EVENTS })

    axios
        .get ("http://localhost:5000/api/event")
        .then(response => {
            dispatch({ type: FETCHED_EVENTS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching events', err })
        })
}

export const createEvent = eventProps => dispatch =>  {
    dispatch({ type: CREATING_EVENT }); 
    
    axios
        .post ("http://localhost:5000/api/event/create-event",
        eventProps
        )
        .then(response => {
            dispatch({ type: CREATED_EVENT, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error creating event.', err})
        });
}

export const deleteEvent = id => dispatch => {
    dispatch({ type: DELETING_EVENT }); 
    
    axios
        .delete (`http://localhost:5000/api/event/delete-event/${id}`)
        .then(response => {
            dispatch({ type: DELETED_EVENT, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error deleting event.', err})
        });
}
