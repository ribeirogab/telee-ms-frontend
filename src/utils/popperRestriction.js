export default function popperRestriction (permission) {
  const writer = ['Assumir', 'Detalhes']
  const editor = ['Editar', 'Excluir', 'Detalhes']
  const dev = ['Editar', 'Excluir', 'Detalhes']

  if (permission >= 0 && permission <= 2) return writer
  else if (permission >= 3 && permission <= 5) return editor
  else if (permission === 99) return dev
  else return []
}
