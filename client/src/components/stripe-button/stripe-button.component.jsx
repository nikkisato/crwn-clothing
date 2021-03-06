import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { checkoutSuccess } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const StripeCheckoutButton = ({ price, checkoutSuccess, history }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HCdUiJp2mpcbsqkeiIlqvRQOU0Vo1eRXX8rSxmWcPS92uA0lq1UUiZX6We88sHzMGDiPvMUqEOVcTFsQWPe6Ti600Qtd3GCdD';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('successful payment');
        checkoutSuccess();
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Testing'
      billingAddress
      ShippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  checkoutSuccess: () => dispatch(checkoutSuccess()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
