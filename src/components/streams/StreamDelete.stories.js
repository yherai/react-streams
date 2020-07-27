import React from 'react';
import StreamDelete from './StreamDelete';
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

storiesOf('StreamDelete', module)
  .add('Without passing any id', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamDelete {...emptyProps} />
      </Router>
    </div>
  ))
  .add('With id 1', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamDelete {...idProps} />
      </Router>
    </div>
  ));
