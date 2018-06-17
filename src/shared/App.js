import React, { Component } from 'react';
import { Switch, Navlink, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Modal from './components/Modal';
import NoMatch from './components/NoMatch';
import UniversalDataloader from './components/UniversalDataloader';

import routes from './routes';

class App extends Component {
  state = {
    open: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  render() {
    return (
      <div className="app">
        <Navbar openModal={this.toggleModal} />
        <main>
          <Switch>
            {routes.map(({ path, exact, C, ...rest }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={props => (
                  <UniversalDataloader {...props} {...rest}>
                    {dataProps => <C {...dataProps} />}
                  </UniversalDataloader>
                )}
              />
            ))}

            <Route render={props => <NoMatch {...props} />} />
          </Switch>
        </main>
        <Modal open={this.state.open} closeModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
