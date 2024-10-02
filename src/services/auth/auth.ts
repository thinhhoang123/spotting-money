'use server';

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });
};

const register = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) => {
  const res = await fetch('http://localhost:3001/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, name, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();
  return data;
};

export { login, register };
