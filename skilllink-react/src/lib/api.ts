const API_URL = 'http://localhost:4000/api';

export type ApiUser = {
  id: string;
  name: string;
  email: string;
  role: 'MANUFACTURER' | 'ARTISAN' | 'ADMIN';
  company?: string | null;
};

type AuthResponse = { token: string; user: ApiUser };

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = sessionStorage.getItem('skilllink_token');
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error ?? 'Unable to reach SkillLink API');
  return body as T;
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  const result = await request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  sessionStorage.setItem('skilllink_token', result.token);
  sessionStorage.setItem('skilllink_user', JSON.stringify(result.user));
  return result;
}

export function logout(): void {
  sessionStorage.removeItem('skilllink_token');
  sessionStorage.removeItem('skilllink_user');
}

export async function getRequirements<T = unknown>(): Promise<T> {
  return request<T>('/requirements');
}

export async function getArtisans<T = unknown>(): Promise<T> {
  return request<T>('/artisans');
}
