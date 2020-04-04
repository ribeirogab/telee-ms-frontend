import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Alert from '../feedback/Alert'
import Modal from '../utility/Modal'
import Snackbar from '../feedback/Snackbar'

import handleApi from '../../services/handleApi'

export default function PopUp ({ choice, openState, componentState, id, endPoint, Component }) {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [propertySnackbar, setPropertySnackbar] = useState({})
  const setOpen = openState[1]

  async function handleDelete () {
    const [items, setItems] = componentState
    await handleApi.destroy(endPoint, id)

    setItems(items.filter(item => item.id !== id))

    setPropertySnackbar({ severity: 'success', text: 'Tarefa excluida com sucesso!' })
    setOpenSnackbar(true)
  }

  async function handleAdd (e, object) {
    e.preventDefault()
    const [items, setItems] = componentState
    await handleApi.store(endPoint, object)

    setItems([...items, object])

    setOpen(false)
    setPropertySnackbar({ severity: 'success', text: 'Tarefa adicionada com sucesso!' })
    setOpenSnackbar(true)
  }

  async function handleEdit (e, object) {
    const [items, setItems] = componentState
    e.preventDefault()
    await handleApi.store(endPoint, object, id)

    setItems(items.map(item => item.id !== id ? item : object))

    setOpen(false)
    setPropertySnackbar({ severity: 'success', text: 'Tarefa editada com sucesso!' })
    setOpenSnackbar(true)
  }

  async function handleDetails () {
    await handleApi.show(endPoint, id)
    return 'detalhes'
  }

  return (
    <>
      {choice === 'delete' ? (
        <DeletePopUp openState={openState} handle={handleDelete} />
      ) : choice === 'add' ? (
        <AddPopUp openState={openState} handle={handleAdd} PopUpComponent={Component} />
      ) : choice === 'edit' ? (
        <EditPopUp openState={openState} handle={handleEdit} PopUpComponent={Component} />
      ) : choice === 'details' ? (
        <DetailsPopUp openState={openState} handle={handleDetails} PopUpComponent={Component} />
      ) : false}

      <Snackbar
        openState={[openSnackbar, setOpenSnackbar]}
        severity={propertySnackbar.severity}
        text={propertySnackbar.text}/>
    </>
  )
} PopUp.propTypes = {
  choice: PropTypes.string.isRequired,
  openState: PropTypes.array.isRequired,
  componentState: PropTypes.array.isRequired,
  id: PropTypes.string,
  endPoint: PropTypes.string.isRequired,
  Component: PropTypes.func
}

function DeletePopUp ({ openState, handle }) {
  return (
    <Alert
      title="Tem certeza que deseja excluir esta tarefa?"
      text="A operação não poderá ser desfeita!"
      buttonConfirm={{ text: 'Excluir', color: 'secondary' }}
      openState={openState}
      handle={handle}/>
  )
} DeletePopUp.propTypes = {
  openState: PropTypes.array.isRequired,
  handle: PropTypes.func.isRequired
}

function AddPopUp ({ openState, handle, PopUpComponent }) {
  return (
    <Modal
      openState={openState}
      Component={forwardRef(function Component (props, refs) {
        return <PopUpComponent handle={handle} />
      })} />
  )
} AddPopUp.propTypes = {
  openState: PropTypes.array.isRequired,
  handle: PropTypes.func.isRequired,
  PopUpComponent: PropTypes.func.isRequired
}

function EditPopUp ({ openState, handle, PopUpComponent }) {
  return (
    <Modal
      openState={openState}
      Component={forwardRef(function Component (props, refs) {
        return <PopUpComponent handle={handle} />
      })} />
  )
} EditPopUp.propTypes = {
  openState: PropTypes.array.isRequired,
  handle: PropTypes.func.isRequired,
  PopUpComponent: PropTypes.func.isRequired
}

function DetailsPopUp ({ openState, handle, PopUpComponent }) {
  return (
    <Modal
      openState={openState}
      Component={forwardRef(function Component (props, refs) {
        return <PopUpComponent handle={handle} />
      })} />
  )
} DetailsPopUp.propTypes = {
  openState: PropTypes.array.isRequired,
  handle: PropTypes.func.isRequired,
  PopUpComponent: PropTypes.func.isRequired
}
