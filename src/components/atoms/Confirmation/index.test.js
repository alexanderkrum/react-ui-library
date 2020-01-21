// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react'
import Confirmation from './index'

test('it matches the snapshot', () => {
  const { container } = render(<Confirmation />)
  expect(container).toMatchSnapshot()
})
