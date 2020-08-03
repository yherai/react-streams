import React from 'react';
import StreamCreate from './StreamCreate';
import { storiesOf } from '@storybook/react';
import { Router } from 'react-router-dom';
import history from '../../history';

storiesOf('StreamCreate', module).add('Default', () => (
  <div className="ui container">
    <Router history={history}>
      <StreamCreate />
    </Router>
  </div>
));
