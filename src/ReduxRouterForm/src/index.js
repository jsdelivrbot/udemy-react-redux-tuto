import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

class Hello extends React.Component {
    render() {
        return <div>Hello! <a href="/goodbye">exit</a></div>
    }
}
class Goodbye extends React.Component {
    render() {
        return <div>Goodbye!<a href="/hello">back</a></div>
    }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              Header
              <Route path="/hello" component={Hello}/>
              <Route path="/goodbye" component={Goodbye}/>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
