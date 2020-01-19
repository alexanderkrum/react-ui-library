import React from 'react';
import { storiesOf } from '@storybook/react';
import Confirmation from './index'


storiesOf('Atoms/Confirmation', module)
  .add('default', () => <Confirmation theme={{card:{}, text: {}, check:{}}}>Subscribed</Confirmation>)
