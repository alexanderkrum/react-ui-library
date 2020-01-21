// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'
import Confirmation from './index'

storiesOf('Atoms/Confirmation', module)
  .add('default', () => <Confirmation>Subscribed</Confirmation>)
  .add('1s ease in duration', () => (
    <Confirmation
      theme={{ card: { easeInDuration: '1s' }, text: {}, check: {} }}
    >
      Subscribed
    </Confirmation>
  ))
  .add('white background', () => (
    <Confirmation
      theme={{ card: { backgroundColor: 'white' }, text: {}, check: {} }}
    >
      Subscribed
    </Confirmation>
  ))
  .add('red text and stroke', () => (
    <Confirmation
      theme={{
        card: { backgroundColor: 'white' },
        text: { color: 'red' },
        check: { strokeColor: 'red' },
      }}
    >
      Subscribed
    </Confirmation>
  ))
  .add('3 second animation', () => (
    <Confirmation theme={{ card: {}, text: {}, check: { duration: '3s' } }}>
      Subscribed
    </Confirmation>
  ))
