import {combineReducers} from 'redux';
import payments from './payments';
import users from './users';
import payups from './payups';

export default 
    combineReducers({
        payments, users, payups
    });