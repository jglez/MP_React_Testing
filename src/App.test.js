import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders App with no errors', () => {
  render(<App />)
})