import { RetellWebClient } from 'retell-client-js-sdk';

let cachedRetellWebClientClass;

export async function getRetellWebClientClass() {
  if (cachedRetellWebClientClass) return cachedRetellWebClientClass;

  // Le SDK est déjà installé via package.json, on peut l'utiliser directement
  cachedRetellWebClientClass = RetellWebClient;
  return cachedRetellWebClientClass;
}
