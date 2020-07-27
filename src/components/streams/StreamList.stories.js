import React from 'react';
import StreamList from './StreamList';
import { storiesOf } from '@storybook/react';
import { Router } from 'react-router-dom';
import history from '../../history';

const streams = [
  {
    title: 'My Stream',
    description: 'This is a great stream!',
    id: 1,
  },
  {
    title: 'I created this stream',
    description: 'The stream is about refactoring',
    id: 2,
  },
  {
    title: 'Me streaming component reuse',
    description: 'Me refactoring components as an example',
    id: 3,
  },
  {
    title: 'This another example',
    description: 'Now buttons should be shown!',
    userId: '102267598368443841755',
    id: 4,
  },
];

const notSignedState = {
  auth: {
    isSignedIn: false,
  },
  streams,
};
const signedState = {
  auth: {
    isSignedIn: true,
    userId: '102267598368443841755',
  },
  streams,
};

storiesOf('StreamList', module)
  .add('Not signed In', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamList state={notSignedState} />
      </Router>
    </div>
  ))
  .add('Signed In', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamList state={signedState} />
      </Router>
    </div>
  ));
