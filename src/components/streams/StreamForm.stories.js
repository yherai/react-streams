import React from 'react';
import StreamForm from './StreamForm';
import { storiesOf } from '@storybook/react';
import { Router } from 'react-router-dom';
import history from '../../history';

const emptyProps = {
  initialValues: {
    title: '',
    description: '',
  },
};
const idProps = {
  initialValues: {
    title: 'Example Title',
    description: 'Example Description',
  },
};

storiesOf('StreamForm', module)
  .add('Without initial values', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamForm {...emptyProps} />
      </Router>
    </div>
  ))
  .add('With initial values', () => (
    <div className="ui container">
      <Router history={history}>
        <StreamForm {...idProps} />
      </Router>
    </div>
  ));
