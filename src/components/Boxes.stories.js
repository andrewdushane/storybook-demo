import React from 'react';
import { storiesOf } from '@storybook/react';
import Boxes from './Boxes';

storiesOf('Boxes', module)
  .add('Four grey boxes', () => (
    <Boxes
      quantity={4}
      color="grey"
      orientation="horizontal"
      wrap
      height={100}
    />
  ))
  .add('Eight red boxes', () => (
    <Boxes
      quantity={8}
      color="red"
      orientation="horizontal"
      wrap
      height={100}
    />
  ));
