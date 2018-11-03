import axios from '../axios-base';

import {
    SIGNING_UP,
    SIGNING_IN,
    AUTH_USER,
    FETCHING_EVENTS,
    FETCHED_EVENTS,
    FETCHING_CLASSES,
    FETCHED_CLASSES,
    CREATING_EVENT,
    CREATED_EVENT,
    DELETING_EVENT,
    DELETED_EVENT,
    ERROR,
    UPDATING_EVENT,
    UPDATED_EVENT,
} from './types';

import jwt_decode from "jwt-decode";

export const signUp = (formProps, callback) => dispatch => {
    dispatch({ type: SIGNING_UP }); 
  
    axios
        .post ('/api/authentication/signup', 
        formProps
        )
        .then(response => {
            dispatch({ type: AUTH_USER, payload: response.data.token })
            localStorage.setItem('token', response.data.token);
            callback();
        })
        
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Username already in use.', err })
        });
  };

export const signIn = (formProps, callback) => dispatch => {
    dispatch({ type: SIGNING_IN }); 
  
    axios
        .post ("/api/authentication/signin",
        formProps
        )
        .then(response => {
            dispatch({ type: AUTH_USER, payload: response.data.token })
            localStorage.setItem("token", response.data.token)
            callback();
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'User not found.', err })
        });
  
  };  

export const signOut = (callback) => {
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
    }

    if (localStorage.getItem('fbToken')) {
        localStorage.removeItem('fbToken');
    }
    callback();
    return {
      type: AUTH_USER,
      payload: ""
    };
  };

export const fetchEvents = () => dispatch => {
    dispatch({ type: FETCHING_EVENTS })

    axios
        .get ("/api/event")
        .then(response => {
            dispatch({ type: FETCHED_EVENTS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching events', err })
        })
}

export const fetchClasses = username => dispatch => {
    dispatch({ type: FETCHING_CLASSES })
    axios
        .post ("/api/event/classes", { username } )
        .then(response => {
            dispatch({ type: FETCHED_CLASSES, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching classes', err })
        })
}

export const createEvent = (eventProps, callback) => dispatch =>  {
    dispatch({ type: CREATING_EVENT }); 
    
    axios
        .post ("/api/event/create-event",
        eventProps
        )
        .then(response => {
            dispatch({ type: CREATED_EVENT, payload: response.data })
            callback();
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error creating event.', err })
        });
}

export const updateEvent = (id, update, callback) => dispatch => {
    dispatch({ type: UPDATING_EVENT });

    axios
        .put('/api/event/update-event', {id, update})
        .then(response => {
            dispatch({ type: UPDATED_EVENT })
            callback();
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "error updating event", err })
        })
}

export const deleteEvent = (id) => dispatch => {
    dispatch({ type: DELETING_EVENT }); 
    
    axios
        .delete (`/api/event/delete-event/${id}`)
        .then(response => {
            dispatch({ type: DELETED_EVENT, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error deleting event.', err })
        });
}

