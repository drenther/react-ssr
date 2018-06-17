import React, { Component } from 'react';
import { Switch, Navlink, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LazyModal from './components/LazyModal';
import NoMatch from './components/NoMatch';

import routes from './routes';

import './App.css';

class App extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <div className="app">
        <Navbar />

        <main>
          <Switch>
            {routes.map(({ path, exact, C, ...rest }) => (
              <Route key={path} path={path} exact={exact} render={props => <C {...props} {...rest} />} />
            ))}

            <Route render={props => <NoMatch {...props} />} />
          </Switch>
        </main>

        {this.state.open && <LazyModal />}
      </div>
    );
  }
}

export default App;
