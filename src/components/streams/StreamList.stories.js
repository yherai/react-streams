import React from 'react';
import StreamList from './StreamList';
import { storiesOf } from '@storybook/react';
import { Router } from 'react-router-dom';
import history from '../../history';

storiesOf('StreamList', module).add('Default', () => (
  <div className="ui container">
    <Router history={history}>
      <StreamList />
    </Router>
  </div>
));
