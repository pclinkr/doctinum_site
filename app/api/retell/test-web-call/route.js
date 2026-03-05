import { NextResponse } from 'next/server';

const DEFAULT_ENDPOINT_TEMPLATE =
  'https://58d18d6412a7.ngrok.app/api/agents/[id]/test-web-call';
const DEFAULT_ROUTE_ID = '7fb97f42-3284-4fee-a2d4-e742fc9c7d32';

function resolveBackendEndpoint() {
  const endpointTemplate =
    process.env.RETELL_WEB_CALL_ENDPOINT_TEMPLATE ||
    process.env.NEXT_PUBLIC_RETELL_WEB_CALL_ENDPOINT_TEMPLATE ||
    DEFAULT_ENDPOINT_TEMPLATE;
  const routeId =
    process.env.RETELL_WEB_CALL_ROUTE_ID ||
    process.env.NEXT_PUBLIC_RETELL_WEB_CALL_ROUTE_ID ||
    DEFAULT_ROUTE_ID;

  if (endpointTemplate.includes('[id]')) {
    return endpointTemplate.replace('[id]', encodeURIComponent(routeId));
  }

  return endpointTemplate;
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const endpoint = resolveBackendEndpoint();

    const upstreamHeaders = { 'Content-Type': 'application/json' };
    const serverAuthToken =
      process.env.RETELL_DEMO_AUTH_TOKEN ||
      process.env.NEXT_PUBLIC_RETELL_DEMO_AUTH_TOKEN;
    if (serverAuthToken) {
      upstreamHeaders.Authorization = `Bearer ${serverAuthToken}`;
    }

    const upstreamResponse = await fetch(endpoint, {
      method: 'POST',
      headers: upstreamHeaders,
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const responseText = await upstreamResponse.text();
    const contentType =
      upstreamResponse.headers.get('content-type') || 'application/json';

    return new NextResponse(responseText, {
      status: upstreamResponse.status,
      headers: { 'content-type': contentType },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'retell_proxy_failed',
        message: error instanceof Error ? error.message : 'Unknown proxy error',
      },
      { status: 502 }
    );
  }
}
