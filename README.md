# Intro to React-Storybook

React Storybook can help you develop React components more efficiently. It provides a sandboxed environment for visualizing React components. 

Storybook can also facilitate collaboration in groups of developers, and between developers and designers and other stakeholders in a project.


## Get started

[https://storybook.js.org/basics/guide-react/](https://storybook.js.org/basics/guide-react/)

Add the config file and the package.json script



To auto-load any files that contain `'.stories.js/x'`:

```javascript
const req = require.context('../src', true, /.stories.jsx?$/);

const loadStories = () => {
  req.keys().forEach(filename => {
    req(filename);
  })
};
```


## Write stories

[https://storybook.js.org/basics/guide-react/#write-your-stories](https://storybook.js.org/basics/guide-react/#write-your-stories)


## Use some addons

The real power of storybook is in the addons. They can make your stories more interactive and informative.

Addons can be added to individual sets of stories.

Some addons can be made available globally using the `addDecorator` helper. In your config file:

```javascript
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

...

```

[Addons documentation](https://storybook.js.org/addons/addon-gallery/)


## Storyshots

Storyshots generates snapshot tests from each of your declared stories.

Slight gotcha - there's a maybe-undocumented dependency on `react-test-renderer`

`npm install react-test-renderer` or `yarn add react-test-renderer`

[Create a `test` file](https://storybook.js.org/testing/structural-testing/)

Note that create-react-app projects are configured to look for `test` files in the `src` directory only.


## Deploy a static build of your storybook

Add the build script to package.json

```json
{
  "buildStorybook": "build-storybook -o storyBook"
}
```

This builds the static assets and stores them in a `storyBook` directory.

It's a good idea to git-ignore this directory, as the static assets don't need to be version controlled.

To deploy to Netlify, use these settings:

```
Build command: npm run buildStorybook
Publish directory: storyBook
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
