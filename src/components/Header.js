import React from 'react'
import PropTypes from 'prop-types'
import Screening from './Screening'

const Header = ({ addTodo }) => (
  <header className="header">
    <h1>todos</h1>
   <Screening ></Screening>
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
