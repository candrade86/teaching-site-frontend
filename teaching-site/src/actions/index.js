import axios from 'axios';

import {
    SIGNING_UP,
    SIGNING_IN,
    AUTH_USER,
    FETCHING_EVENTS,
    FETCHED_EVENTS,
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

