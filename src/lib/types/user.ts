export interface User {
  id: string;
  createdAt: string;
  username: string;
  password: string;
}

export const parseUser = (dbUser: any): User => {
  return {
    id: dbUser.id,
    createdAt: dbUser.created_at,
    username: dbUser['user-name'],
    password: dbUser.password,
  };
}