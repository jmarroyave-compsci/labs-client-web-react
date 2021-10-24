import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

export const itMustHaveNoErrors = ( container ) => {
  expect(screen.queryByText('Error in components')).toBeNull()
}