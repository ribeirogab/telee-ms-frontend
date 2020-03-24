import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { handleUpdate, handleShow } from '../../services/handle'

export default function Update ({ setOpen, id, routePut, routeShow, state, Form, selectData }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData () {
      const data = await handleShow(id, routeShow)
      setData(data)
    }
    getData()
  }, [id, routeShow])

  async function updateItem (updatedItems) {
    const [rows, setRows] = state
    const data = await handleUpdate(updatedItems, id, routePut, state)
    const selectedData = selectData(data)
    setRows(rows.map(row => row[row.length - 1] === data._id ? selectedData : row))
  }

  return (
    <>
      <Form
        setOpen={setOpen}
        handleItem={updateItem}
        isUpdate={data}
      />
    </>
  )
}

Update.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.string,
  routePut: PropTypes.string,
  routeShow: PropTypes.string,
  state: PropTypes.array,
  Form: PropTypes.func,
  selectData: PropTypes.func
}
