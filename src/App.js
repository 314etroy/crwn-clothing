import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.compoment';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

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
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
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

// class App extends React.Component {

//   render() {
//     return (
//       // <div><HomePage /></div>
//       <Route exact path='/' component={HomePage} />
//       <Route path='/hats' component={HatsPage} />
//     );
//   }
// }

export default App;