import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PayUp from '../components/PayUp'

class PayUpList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>PAY UP BITCHES</h2>
                <div>
                    {this.props.payups.map(payUp => (
                        <div key={payUp.id}>{payUp.fromUser} pays {payUp.amount} to {payUp.toUser}</div>
                    ))}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {payups: state.payups}
}

export default connect(mapStateToProps)(PayUpList)
