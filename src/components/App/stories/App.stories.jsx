import React from 'react';
import { Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import App from '..';
import history from '../../../history';

const generareHistory = () => {
  history.push('/');
  return history;
};

storiesOf('App', module).add('Default', () => (
  <Router history={generareHistory()}>
    <App />
  </Router>
));
