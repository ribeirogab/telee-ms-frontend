export default function userPermissionTranslate(permission: string): string {
  if (permission === 'writer') return 'Redator(a)';
  if (permission === 'editor') return 'Auditor(a)';
  if (permission === 'administrator') return 'Administrador(a)';
  if (permission === 'developer') return 'Desenvolvedor(a)';
  return '...';
}
