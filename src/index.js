import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/reset.css';
import './style/colors.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
