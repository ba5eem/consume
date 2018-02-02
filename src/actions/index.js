const axios = require('axios');

export const LOAD_USERS = 'LOAD_USERS';
export const IP = 'http://54.88.118.239';


export const loadUsers = () => {
  return function(dispatch){
    return axios.get(`${IP}/users`)
    .then( users => {
      dispatch({
        type: LOAD_USERS,
        payload: users.data
      });
    });
  }
}