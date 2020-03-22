export default function formatTaskDetails (task) {
  return {
    Keyword: task.keyword,
    'KW Secundárias': task.subKeywords,
    Site: task.website,
    Pautas: task.guidelines.join(', '),
    Descrição: task.description,
    Status: 'Não iniciado',
    'Criado em': '99/99/1000'
  }
}
