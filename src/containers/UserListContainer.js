import {connect} from 'react-redux';
import UserList from '../components/UserList';
import {removeUser} from '../actions';

const getUsers = (users) => {
    return users;
}

const mapStateToProps = state => ({
    users: getUsers(state.users)
})

const mapDispatchToProps = (dispatch) => ({
   removeUser: userName => dispatch(removeUser(userName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)