import React from 'react'
import PropTypes from 'prop-types'

import { handleStore } from '../../services/handle'

export default function Store ({ setOpen, id, route, state, Form, selectData }) {
  async function createItem (item) {
    const [rows, setRows] = state

    const data = await handleStore(item, route, state)
    const selectedData = selectData(data)

    setRows(rows.concat([selectedData]))

    setOpen(false)
  }
  return (
    <>
      <Form
        setOpen={setOpen}
        handleItem={createItem}
      />
    </>
  )
}

Store.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.string,
  route: PropTypes.string,
  state: PropTypes.array,
  Form: PropTypes.func,
  selectData: PropTypes.func
}
