import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import Boxes from './Boxes';

const colorOptions = {
  grey: 'grey',
  red: 'red',
  black: 'black',
  blue: 'blue',
};

storiesOf('Boxes', module)
  .add('Four grey boxes', withInfo('Configurable boxes')(withNotes('Check out these boxes')(() => (
    <Boxes
      quantity={number('Number of boxes', 8)}
      maxPerRow={number('Max boxes per row', 4)}
      color={select('Color', colorOptions, 'grey')}
      height={number('Height', 100)}
    />
  ))))
  .add('Twenty static red boxes', () => (
    <Boxes
      quantity={20}
      maxPerRow={5}
      color="red"
      height={150}
    />
  ));;
