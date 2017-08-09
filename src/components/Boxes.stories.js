import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Boxes from './Boxes';

const colorOptions = {
  grey: 'grey',
  red: 'red',
  black: 'black',
  blue: 'blue',
};

const orientationOptions = {
  horizontal: 'Horizontal',
  vertical: 'Vertical',
};

storiesOf('Boxes', module)
  .add('Four grey boxes', withInfo('Configurable boxes')(() => (
    <Boxes
      quantity={number('Number of boxes', 4)}
      color={select('Color', colorOptions, 'grey')}
      orientation={select('Orientation', orientationOptions, 'horizontal')}
      wrap={boolean('Wrap', true)}
      height={number('Height', 100)}
    />
  )))
  .add('Eight red boxes', () => (
    <Boxes
      quantity={8}
      color="red"
      orientation="horizontal"
      wrap
      height={100}
    />
  ));
