import React from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions';

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }

    updateUserInput = userInput => {
        this.setState({ userInput });
    }

    handleAddUser = () => {
        if (!this.state.userInput.trim()) {
            return;
        }
        
        this.props.dispatch(
            addUser(this.state.userInput)
        );

        this.setState({
            userInput: ''
        });
    }

    render() {
        return(
            <div>
                <span>Name</span>
                <input type="text"
                    value={this.state.userInput}
                    onChange={e => this.updateUserInput(e.target.value)}
                />
                <button onClick={this.handleAddUser}>
                    Add User
                </button>
            </div>
        );
    }
}

export default connect()(AddUser);