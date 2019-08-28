import { configure } from '@storybook/react';
const req = require.context(`../src`, true, /.__stories__.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);