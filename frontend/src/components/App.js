import React from 'react';
import Homepage from './Homepage';
//  import Login from './Login';
// import Dummy from './Dummy';
import LoginScreen from './Login';
import CreateUserScreen from './CreateUser';
import CategoryScreen from './Category';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

//  import Dummy from './Dummy';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Homepage} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/categories' component={CategoryScreen} />
        <Route path='/new-user' component={CreateUserScreen} />
        <Redirect to='/home' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
