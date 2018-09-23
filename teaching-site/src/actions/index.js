import axios from 'axios';

import {
    SIGNING_UP,
    AUTH_USER,
    ERROR
} from './types';

import jwt_decode from "jwt-decode";

export const signUp = (formProps, callback) => dispatch => {
    dispatch({ type: SIGNING_UP }); 
  
    axios
        .post ("http://localhost:5000/api/authentication/signup", 
        formProps
        )
        .then(response => {
            // localStorage.setItem('token', response.data.token);
            dispatch({ type: AUTH_USER, payload: response.data.token })
            callback();
        })
        
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Username already in use.', err})
        });
  };

