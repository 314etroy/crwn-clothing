import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { createStructuredSelector } from 'reselect';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
                    )}
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// import CustomButton from '../custom-button/custom-button.component';
// import './cart-dropdown.styles.scss';

// const CartDropdown = ({ cartItems, history, dispatch }) => (
//     <div className='cart-dropdown'>
//         <div className='cart-items'>
//             {
//                 cartItems.length ? (
//                     cartItems.map(cartItem => (
//                         <CartItem key={cartItem.id} item={cartItem} />
//                     ))
//                 ) : (
//                         <span className='empty-message'>Your cart is empty.</span>
//                     )}
//         </div>
//         <CustomButton onClick={() => {
//             history.push('/checkout');
//             dispatch(toggleCartHidden());
//         }}>
//             GO TO CHECKOUT
//         </CustomButton>
//     </div>
// );

// - - - -

// const CartDropdown = ({ cartItems, history, ...otherProps }) => {
//     console.log(otherProps);
//     return (
//         <div className='cart-dropdown'>
//             <div className='cart-items'>
//                 {
//                     cartItems.length ? (
//                         cartItems.map(cartItem => (
//                             <CartItem key={cartItem.id} item={cartItem} />
//                         ))
//                     ) : (
//                             <span className='empty-message'>Your cart is empty.</span>
//                         )}
//             </div>
//             <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
//         </div>
//     );
// };