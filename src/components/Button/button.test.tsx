import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'
test('test common',() => {
  const wrapper = render(<Button>submit</Button>)
  const element = wrapper.queryByText('submit')
  expect(element).toBeTruthy()
})