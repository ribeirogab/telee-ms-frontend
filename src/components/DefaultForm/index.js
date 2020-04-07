import React from 'react'
import PropTypes from 'prop-types'

import { DefaultFormElement, InputGroupElement, ButtonGroupElement } from './styles'

export function DefaultForm ({ children, handleSubmit }) {
  return (
    <DefaultFormElement onSubmit={handleSubmit}>
      {children}
    </DefaultFormElement>
  )
}
DefaultForm.propTypes = {
  children: PropTypes.array,
  handleSubmit: PropTypes.func
}

export function InputGroup ({ children }) {
  return (
    <InputGroupElement>
      {children}
    </InputGroupElement>
  )
}
InputGroup.propTypes = {
  children: PropTypes.array
}

export function ButtonGroup ({ children }) {
  return (
    <ButtonGroupElement>
      {children}
    </ButtonGroupElement>
  )
}
ButtonGroup.propTypes = {
  children: PropTypes.array
}
