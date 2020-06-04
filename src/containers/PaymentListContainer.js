import {connect} from 'react-redux';
import PaymentList from '../components/PaymentList';
import {removePayment} from '../actions'

const getPayments = (payments) => {
    return payments;
}

const mapStateToProps = state => ({
    payments: getPayments(state.payments)
})

const mapDispatchToProps = dispatch => ({
    removePayment: id => dispatch(removePayment(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentList)