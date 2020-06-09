import { verify } from 'jsonwebtoken';

interface TokenPayload {
  permission: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function AuthenticateService(permissions: string[]): boolean {
  const token = localStorage.getItem('@teleems:token');

  if (!token) {
    localStorage.clear();
    return false;
  }

  try {
    const decoded = verify(token, process.env.REACT_APP_SECRET as string);
    const { permission } = decoded as TokenPayload;

    const userHasPermission = permissions.includes(permission);

    if (!userHasPermission) {
      localStorage.clear();
      return false;
    }

    return true;
  } catch {
    localStorage.clear();
    return false;
  }
}
