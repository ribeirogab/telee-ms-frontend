import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'

import Root from './components/Root'

import api from '../../services/api'

export default function RestTable ({ user, thead, Form, formatDetails, selectData, additionalToPopper, routes, customTable }) {
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function getData () {
      const token = localStorage.getItem('token')
      const { data } = await api.get(routes.index, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const rowsWithData = data.map(d => selectData(d))

      setRows(rowsWithData)
    }
    getData()
  }, [routes.index, selectData])

  return (
    <Container maxWidth="lg">
      <Root
        user={user}
        thead={thead}
        rows={rows}
        Form={Form}
        formatDetails={formatDetails}
        selectData={selectData}
        additionalToPopper={additionalToPopper}
        routes={routes}
        state={[rows, setRows]}
        customTable={customTable}
      />
    </Container>
  )
}

RestTable.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  thead: PropTypes.array,
  Form: PropTypes.func,
  formatDetails: PropTypes.func,
  selectData: PropTypes.func,
  additionalToPopper: PropTypes.array,
  routes: PropTypes.object,
  customTable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ])
}
