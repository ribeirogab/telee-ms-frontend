import api from '../../../services/api'

const token = localStorage.getItem('token')

async function handleStore (item, route) {
  try {
    const { data } = await api.post(route, item, {
      headers: { Authorization: `Bearer ${token}` }
    })

    return data
  } catch (error) {
    console.error(error)
    return { error }
  }
}

async function handleUpdate (updatedItem, id, route) {
  try {
    const putRoute = route.split(':')[0] + id
    const { data } = await api.put(putRoute, updatedItem, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return data
  } catch (error) {
    return { error }
  }
}

async function handleDestroy (id, route, state) {
  try {
    const destroyRoute = route.split(':')[0] + id
    const { data } = await api.delete(destroyRoute, {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
async function handleShow (id, route) {
  try {
    const showRoute = route.split(':')[0] + id
    const { data } = await api.get(showRoute, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export { handleStore, handleUpdate, handleDestroy, handleShow }
