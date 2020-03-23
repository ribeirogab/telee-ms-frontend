export default function formatTaskDetails (task) {
  return {
    keyword: task.keyword,
    subKeywords: task.subKeywords,
    website: task.website,
    guidelines: task.guidelines.join(', '),
    description: task.description,
    status: 'Não iniciado',
    date: '99/99/1000'
  }
}
