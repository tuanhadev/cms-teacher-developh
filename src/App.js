import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const AuthRoute = React.lazy(() => import('./util/AuthRoute'));

class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <AuthRoute path="/" name="Home" component={TheLayout} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route name="Page 404" render={props => <Page404 {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
