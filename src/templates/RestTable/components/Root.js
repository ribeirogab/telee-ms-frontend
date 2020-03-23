import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Modal from './Modal'
import Dialog from './Dialog'

import DefaultTable from './DefaultTable'
import Popper from './Popper'

// REST COMPONENTS
import Store from './rest/Store'
import Update from './rest/Update'
import Destroy from './rest/Destroy'
import Show from './rest/Show'

export default function Root ({ user, thead, rows, Form, CustomizedDetails, formatDetails, selectData, additionalToPopper, routes, state, customTable }) {
  const [SelectTable, setSelectTable] = useState(() => DefaultTable)
  const [id, setId] = useState(null)
  const [additionals, setAdditionals] = useState(
    additionalToPopper.map(item => ({ open: false, text: item.text, permission: item.permission }))
  )
  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [alertDelete, setAlertDelete] = useState(false)
  const [modalDetails, setModalDetails] = useState(false)

  useEffect(() => {
    if (customTable) {
      setSelectTable(() => customTable)
    }
  }, [customTable])

  return (
    <>
      {additionalToPopper.map((item, index) => {
        let AdditionalContainer = null
        if (item.container === 'Modal') AdditionalContainer = Modal
        else if (item.container === 'Dialog') AdditionalContainer = Dialog

        return (
          <AdditionalContainer
            key={index}
            open={additionals[index].open}
            Component={
              () =>
                <item.AdditionalComponent
                  index={index}
                  additionals={additionals}
                  setAdditionals={setAdditionals}
                  id={id}
                  route={item.route}
                  state={state} />}/>
        )
      })}

      <Modal
        open={modalAdd}
        Component={() => <Store setOpen={setModalAdd} id={id} route={routes.store} state={state} Form={Form} selectData={selectData} />}
      />
      <Modal
        open={modalEdit}
        Component={() => <Update setOpen={setModalEdit} id={id} route={routes.put} state={state} Form={Form} selectData={selectData} />}
      />
      <Dialog
        open={alertDelete}
        Component={() => <Destroy setOpen={setAlertDelete} id={id} route={routes.destroy} state={state} />}
      />
      <Modal
        open={modalDetails}
        Component={() => <Show setOpen={setModalDetails} id={id} route={routes.show} formatDetails={formatDetails} CustomizedDetails={CustomizedDetails} />}
      />

      <SelectTable
        user={user}
        setModalAdd={setModalAdd}
        thead={thead}
        rows={rows}
        setId={setId}
        additionals={additionals}
        setAdditionals={setAdditionals}
        setModalEdit={setModalEdit}
        setAlertDelete={setAlertDelete}
        setModalDetails={setModalDetails}
        Popper={Popper}
      />
    </>
  )
}

Root.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  thead: PropTypes.array,
  rows: PropTypes.array,
  Form: PropTypes.func,
  CustomizedDetails: PropTypes.func,
  formatDetails: PropTypes.func,
  selectData: PropTypes.func,
  additionalToPopper: PropTypes.array,
  routes: PropTypes.object,
  state: PropTypes.array,
  customTable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ])
}
