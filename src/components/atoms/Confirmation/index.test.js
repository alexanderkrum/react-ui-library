import React from 'react'
import {render} from '@testing-library/react'
import Confirmation from './index'

test('it matches the snapshot', () => {
  const {container} = render(<Confirmation/>)
  expect(container).toMatchSnapshot()
})
