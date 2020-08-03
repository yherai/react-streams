import React from 'react';
import StreamEdit from './StreamEdit';
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

storiesOf('StreamEdit', module)
  .add('Without ID', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamEdit {...emptyProps} />
      </Router>
    </div>
  ))
  .add('With id 1', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamEdit {...idProps} />
      </Router>
    </div>
  ));
