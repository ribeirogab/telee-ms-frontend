import api from './api'

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

async function Details (taskId, state, modal) {
  const { details } = modal
  const [open, info] = details
  const token = localStorage.getItem('token')
  const { data } = await api.get(`/uninitiated-task/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  open(true)
  info(data)
}

async function Edit (taskId, state, modal) {
  const { edit } = modal
  const [open, info] = edit
  const token = localStorage.getItem('token')
  const { data } = await api.get(`/uninitiated-task/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  open(true)
  info(data)
}

async function Delete (taskId, state, modal) {
  const [notDisplayRows, setNotDisplayRows] = state
  if (window.confirm('Deseja realmente excluir esta tarefa?')) {
    const token = localStorage.getItem('token')
    const { data } = await api.delete(`/uninitiated-task/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    setNotDisplayRows(notDisplayRows.filter(row => row[row.length - 1] !== taskId))

    console.log(data)
  }
}
