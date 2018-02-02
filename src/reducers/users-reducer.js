import { LOAD_USERS } from '../actions';


const users = (state = {}, action) => {

  switch(action.type){
    case LOAD_USERS:
      return state;
    default:
      return state
  }
}

export default users;