import { verify } from 'jsonwebtoken';

interface TokenPayload {
  permission: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function AuthenticateService(permissions: string[]): boolean {
  const token = localStorage.getItem('token');

  if (!token) return false;

  try {
    const decoded = verify(token, process.env.REACT_APP_SECRET as string);
    const { permission } = decoded as TokenPayload;
    return permissions.includes(permission);
  } catch {
    return false;
  }
}
