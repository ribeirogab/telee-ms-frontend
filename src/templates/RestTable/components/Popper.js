import React from 'react'
import PropTypes from 'prop-types'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindMenu } from 'material-ui-popup-state'

export default function Popper ({ user, id, setId, additionals, setAdditionals, setModalEdit, setModalDelete, setModalDetails, PopperButton }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <>
          <PopperButton popupState={popupState} />
          <Menu {...bindMenu(popupState)}>
            {user.permission > 3 ? (
              <MenuItem
                onClick={() => {
                  popupState.close()
                  setModalEdit(true)
                  setId(id)
                }}>
            EDITAR
              </MenuItem>) : null}

            {user.permission > 3 ? (
              <MenuItem
                onClick={() => {
                  popupState.close()
                  setModalDelete(true)
                  setId(id)
                }}>
            EXCLUIR
              </MenuItem>) : null}

            <MenuItem
              onClick={() => {
                popupState.close()
                setModalDetails(true)
                setId(id)
              }}>
            DETALHES
            </MenuItem>

            {additionals.map((item, index) => {
              if (item.permission(user.permission)) {
                return (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      popupState.close()
                      setAdditionals(additionals.map((additional, i) => {
                        if (i === index) {
                          additional.open = true
                        }
                        return additional
                      }))
                      setId(id)
                    }}>
                    {item.text}
                  </MenuItem>
                )
              } else return null
            })}

          </Menu>
        </>
      )}
    </PopupState>
  )
}

Popper.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  id: PropTypes.string,
  setId: PropTypes.func,
  additionals: PropTypes.array,
  setAdditionals: PropTypes.func,
  setModalEdit: PropTypes.func,
  setModalDelete: PropTypes.func,
  setModalDetails: PropTypes.func,
  PopperButton: PropTypes.func
}
