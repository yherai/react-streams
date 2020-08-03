import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../src/reducers';
import reduxThunk from 'redux-thunk';
import { addDecorator } from '@storybook/react';

// Logic for Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

addDecorator((storyFn) => <Provider store={store}>{storyFn()}</Provider>);

// Logic to create a div for Modals
const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.append(modalRoot);
