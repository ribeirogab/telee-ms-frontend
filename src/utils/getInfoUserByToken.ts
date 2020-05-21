import { verify } from 'jsonwebtoken';

interface TokenPayload {
  nameUser: string;
  permission: string;
  iat: number;
  exp: number;
  sub: string;
}

interface User {
  name: string;
  permission: string;
}

export default function getPermissionUser(): User {
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    return { name: '...', permission: '...' };
  }

  try {
    const decoded = verify(token, process.env.REACT_APP_SECRET as string);
    const { nameUser: name, permission } = decoded as TokenPayload;

    let translatePermissionPtBr = '';

    if (permission === 'writer') translatePermissionPtBr = 'redator';
    else if (permission === 'editor') translatePermissionPtBr = 'auditor';
    else if (permission === 'administrator')
      translatePermissionPtBr = 'administrador';

    return { name, permission: translatePermissionPtBr };
  } catch {
    return { name: '...', permission: '...' };
  }
}
