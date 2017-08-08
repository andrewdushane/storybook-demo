import { configure } from '@storybook/react';

const req = require.context('../src', true, /.stories.jsx?$/);

const loadStories = () => {
  req.keys().forEach(filename => {
    req(filename);
  })
};

configure(loadStories, module);
