import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';

import Game from './components/game';
import store from './store';
//import { makeGuess, restartGame, toggleModal } from './actions';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

// console.log(store.getState());
// store.dispatch(makeGuess(14));
// store.dispatch(makeGuess(14));
// console.log(store.getState());
// store.dispatch(makeGuess(30));
// store.dispatch(makeGuess(50));
// console.log(store.getState());
// store.dispatch(resetGame());
// console.log(store.getState({}));
// store.dispatch(toggleModal());
// console.log(store.getState({}));
// store.dispatch(toggleModal());
// console.log(store.getState({}));
