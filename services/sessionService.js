import { cookies } from 'next/headers';

export function getClientIdentifier(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded
    ? forwarded.split(',')[0]
    : request.headers.get('x-real-ip') || 'unknown';
  return ip;
}

export async function getOrCreateSessionId() {
  const cookieStore = await cookies();
  const existingSession = cookieStore.get('retell_session_id');

  if (existingSession) {
    return existingSession.value;
  }

  return `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

export async function setSessionCookie(sessionId) {
  const cookieStore = await cookies();

  cookieStore.set('retell_session_id', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 86400, // 24 hours
  });
}
