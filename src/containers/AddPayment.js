import React from 'react';
import { connect } from 'react-redux';
import { addPayment } from '../actions';
import './AddPayment.css';

class AddPayment extends React.Component {
    constructor(props) {
        super(props);
        const userInput = props.users.length > 0 ? props.users[0] : '';
        const splitBetweenInput = props.users.length > 0 ? props.users[0] : '';
        this.state = { 
            amountInput: "",
            userInput: userInput, 
            splitBetweenOptions: [],
            splitBetweenUsers: [],
            splitBetweenInput: splitBetweenInput,
            isValidAmountInput: true
        };
    }

    componentDidUpdate = prevProps => {
        if (prevProps.users.length !== this.props.users.length) {
            if (prevProps.users.length === 0) {
                this.setState({
                    userInput: this.props.users[0],
                    splitBetweenInput: this.props.users[0]
                });
            }
            for (let user of this.props.users) {
                if (!this.state.splitBetweenOptions.includes(user)
                    && !this.state.splitBetweenUsers.includes(user)) {
                        this.setState({
                            splitBetweenOptions: [...this.state.splitBetweenOptions, user]
                        });
                    }
            }
        }
    }

    updateSplitBetweenInput = splitBetweenInput => {
        this.setState({splitBetweenInput});
    }

    updateAmountInput = amountInput => {
        this.setState({ amountInput });
    }

    updateUserInput = userInput => {
        this.setState({ userInput });
    }

    /**
     * Adds the payment configured in this component to the redux state
     */
    handleAddPayment = () => {
        if (!this.state.amountInput.trim()
            || isNaN(parseFloat(this.state.amountInput))) {
            this.setState({ isValidAmountInput: false });
            return;
        }
        this.props.addPayment(
            parseFloat(this.state.amountInput).toFixed(2),
            this.state.userInput,
            this.state.splitBetweenUsers
        );
        this.setState({
            amountInput: '',
            isValidAmountInput: true
        });
    }

    /**
     * Takes a user from the available options and moves it to the users that the payment will
     * be split between.
     */
    handleAddSplitBetweenUser = () => {
        if (!this.state.splitBetweenInput.trim())
            return;

        const splitBetweenUsers = [...this.state.splitBetweenUsers, this.state.splitBetweenInput];
        const idxToDelete = this.state.splitBetweenOptions.findIndex(user => user === this.state.splitBetweenInput);
        const splitBetweenOptions = [
            ...this.state.splitBetweenOptions.splice(0, idxToDelete),
            ...this.state.splitBetweenOptions.splice(idxToDelete + 1)
        ];
        const splitBetweenInput = splitBetweenOptions.length > 0 ? splitBetweenOptions[0] : '';
        this.setState({splitBetweenUsers, splitBetweenOptions, splitBetweenInput});
    }

    /**
     * Takes a user from the users that the payment will be split between, and moves it to 
     * the available options
     */
    handleRemoveSplitBetweenUser = (removedUser) => {
        const splitBetweenOptions = [...this.state.splitBetweenOptions, removedUser];
        const idxToDelete = this.state.splitBetweenUsers.findIndex(user => user === removedUser);
        const splitBetweenUsers = [
            ...this.state.splitBetweenUsers.splice(0, idxToDelete),
            ...this.state.splitBetweenUsers.splice(idxToDelete + 1)
        ];
        if (splitBetweenOptions.length === 1)
            this.setState({splitBetweenInput: splitBetweenOptions[0]});

        this.setState({splitBetweenUsers, splitBetweenOptions});
    }

    render() {
        return (
            <div>
                <div>
                    <span>Payment ($)</span>
                    <input type="number"
                        value={this.state.amountInput}
                        onChange={e => this.updateAmountInput(e.target.value)}
                        className={!this.state.isValidAmountInput ? 'invalid-input' : undefined}
                    />
                </div>
                <div>
                    <span>User</span>
                    <select value={this.state.userInput}
                     onChange={e => this.updateUserInput(e.target.value)}>
                        {this.props.users.map(user => (<option key={user}>{user}</option>))}
                    </select>
                </div>
                <div>
                    <span>Split Between</span>
                    <select value={this.state.splitBetweenInput}
                     onChange={e => this.updateSplitBetweenInput(e.target.value)}>
                        {this.state.splitBetweenOptions.map(user => (<option key={user}>{user}</option>))}
                    </select>
                    <button onClick={this.handleAddSplitBetweenUser}>
                        +
                    </button>
                    <ul>
                        {this.state.splitBetweenUsers.map(user => (
                        <li key={user}
                            onClick={() => this.handleRemoveSplitBetweenUser(user)}>{user}</li>))}
                    </ul>
                </div>
                <div>
                    <button onClick={this.handleAddPayment}>
                        Add Payment
                    </button>
                </div>
            </div>
        )
    }
}

const getUsers = (users) => {
    return users;
}

const mapStateToProps = state => ({
    users: getUsers(state.users)
})

const mapDispatchToProps = dispatch => ({
    addPayment: (amount, user, splitBetween) => dispatch(addPayment(amount, user, splitBetween))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPayment)