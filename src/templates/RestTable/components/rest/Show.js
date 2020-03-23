import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { handleShow } from '../../services/handle'
import DefaultDetails from '../DefaultDetails'

export default function Show ({ setOpen, id, route, formatDetails, CustomizedDetails }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData () {
      if (id && route) {
        const data = await handleShow(id, route)
        const formatedData = formatDetails(data)
        setData(formatedData)
      }
    }
    getData()
  }, [id, route, formatDetails])

  if (data) {
    return CustomizedDetails ? (<CustomizedDetails data={data} setOpen={setOpen} />) : (<DefaultDetails data={data} setOpen={setOpen}/>)
  } else return null
}

Show.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.string,
  route: PropTypes.string,
  state: PropTypes.array,
  formatDetails: PropTypes.func,
  CutomizedDetails: PropTypes.func
}
