import React from 'react';
// import styled from 'styled-components';
import Header from './components/header/header.compoment';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/jackets' component={JacketsPage} />
          <Route path='/sneakers' component={SneakersPage} />
          <Route path='/womens' component={WomensPage} />
          <Route path='/mens' component={MensPage} />
        </Switch >
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);