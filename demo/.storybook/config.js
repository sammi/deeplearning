import { configure } from '@storybook/react'

function loadStories() {
  require('../src/timeline')
}

configure(loadStories, module)
