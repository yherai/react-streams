import React from 'react';
import { Router } from 'react-router-dom';
import App from './App';
import { storiesOf } from '@storybook/react';
import history from '../history';

const generareHistory = () => {
  history.push('/');
  return history;
};

storiesOf('App', module).add('Default', () => (
  <Router history={generareHistory()}>
    <App />
  </Router>
));
