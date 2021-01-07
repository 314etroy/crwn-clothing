import React, { useEffect } from 'react';
import Header from './components/header/header.compoment';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';

const HatsPage = (props) => (
  <div>
    {console.log(props)}
    <h1> HATS PAGE </h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1> JACKETS PAGE </h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1> SNEAKERS PAGE </h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1> WOMENS PAGE </h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1> MENS PAGE </h1>
  </div>
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/jackets' component={JacketsPage} />
        <Route path='/sneakers' component={SneakersPage} />
        <Route path='/womens' component={WomensPage} />
        <Route path='/mens' component={MensPage} />
      </Switch >
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// import styled from 'styled-components';