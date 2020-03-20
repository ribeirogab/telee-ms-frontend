import api from './api'

export default function handleWriters (permission) {
  const editor = [
    { label: 'Editar', func: Edit },
    { label: 'Excluir', func: Delete },
    { label: 'Detalhes', func: Details }
  ]

  if (permission > 3) return editor
  else return []
}

async function Details (writerId) {
  alert('detalhes' + writerId)
  // const { data } = await api.a('')
}

async function Edit (writerId) {
  alert('editar' + writerId)
  // const { data } = await api.a('')
}

async function Delete (writerId) {
  alert('deletar' + writerId)
  // const { data } = await api.a('')
}
