// import api from './api'

export default function handleUninitiatedTasks (permission) {
  const writer = [
    { label: 'Assumir', func: Assume },
    { label: 'Detalhes', func: Details }
  ]
  const editor = [
    { label: 'Editar', func: Edit },
    { label: 'Excluir', func: Delete },
    { label: 'Detalhes', func: Details }
  ]

  if (permission >= 0 && permission <= 2) return writer
  else if (permission > 3) return editor
  else return []
}

async function Assume (taskId) {
  alert('assume' + taskId)
  // const token = localStorage.getItem('token')
  // const { data } = await api.put('/writer/task/send/audit',
  //   { taskId },
  //   { headers: { Authorization: `Bearer ${token}` } }
  // )
  // console.log(data)
}

async function Details (taskId) {
  alert('detalhes' + taskId)
  // const { data } = await api.a('')
}

async function Edit (taskId) {
  alert('editar' + taskId)
  // const { data } = await api.a('')
}

async function Delete (taskId) {
  alert('deletar' + taskId)
  // const { data } = await api.a('')
}
