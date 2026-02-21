const RETELL_WEB_SDK_URL = 'https://cdn.jsdelivr.net/npm/retell-client-js-sdk@2.0.7/+esm';

let cachedRetellWebClientClass;

export async function getRetellWebClientClass() {
  if (cachedRetellWebClientClass) return cachedRetellWebClientClass;

  const retellModule = await import(/* @vite-ignore */ RETELL_WEB_SDK_URL);
  const RetellWebClientClass =
    retellModule?.RetellWebClient ||
    retellModule?.default?.RetellWebClient ||
    retellModule?.default;

  if (!RetellWebClientClass) {
    throw new Error('Retell Web SDK loaded but RetellWebClient export is missing.');
  }

  cachedRetellWebClientClass = RetellWebClientClass;
  return cachedRetellWebClientClass;
}
