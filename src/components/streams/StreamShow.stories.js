import React from 'react';
import StreamShow from './StreamShow';
import { storiesOf } from '@storybook/react';
import { Router } from 'react-router-dom';
import history from '../../history';

const emptyProps = {
  match: {
    params: {},
  },
};
const idProps = {
  match: {
    params: {
      id: 1,
    },
  },
};

storiesOf('StreamShow', module)
  .add('Without id', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamShow {...emptyProps} />
      </Router>
    </div>
  ))
  .add('With id 1', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamShow {...idProps} />
      </Router>
    </div>
  ));
