import { NextResponse } from 'next/server';
import { getClientIdentifier, getOrCreateSessionId, setSessionCookie } from '../../../../services/sessionService.js';
import { checkRateLimits, incrementCallCount, incrementDailyBudget } from '../../../../services/rateLimitService.js';
import { createRetellWebCall } from '../../../../services/retellService.js';

export async function POST(request) {
  try {
    const payload = await request.json();
    const { demoType, metadata, retell_llm_dynamic_variables } = payload;

    console.log('[test-web-call] Received request with demoType:', demoType);

    // Map demoType to agentId and agentVersion from environment variables
    const demoTypeMap = {
      ortho: {
        agentId: process.env.ORTHO_RETELL_AGENT_ID,
        agentVersion: parseInt(process.env.ORTHO_RETELL_AGENT_VERSION, 10),
      },
      aesthetic: {
        agentId: process.env.AESTHETIC_RETELL_AGENT_ID,
        agentVersion: parseInt(process.env.AESTHETIC_RETELL_AGENT_VERSION, 10),
      },
      cardiac: {
        agentId: process.env.CARDIOLOGY_RETELL_AGENT_ID,
        agentVersion: parseInt(process.env.CARDIOLOGY_RETELL_AGENT_VERSION, 10),
      },
      oncology: {
        agentId: process.env.ONCOLOGY_RETELL_AGENT_ID,
        agentVersion: parseInt(process.env.ONCOLOGY_RETELL_AGENT_VERSION, 10),
      },
    };

    // Validate demoType and get corresponding agent config
    if (!demoType || !demoTypeMap[demoType]) {
      return NextResponse.json(
        {
          error: 'invalid_demo_type',
          message: 'demoType must be one of: ortho, aesthetic, cardiac, oncology',
        },
        { status: 400 }
      );
    }

    const { agentId, agentVersion } = demoTypeMap[demoType];

    console.log('[test-web-call] Resolved agentId:', agentId, 'agentVersion:', agentVersion);

    if (!agentId) {
      console.error('[test-web-call] Agent not configured for demoType:', demoType);
      return NextResponse.json(
        {
          error: 'agent_not_configured',
          message: `Agent ID not configured for demoType: ${demoType}`,
        },
        { status: 500 }
      );
    }

    // Get client identifiers
    const ip = getClientIdentifier(request);
    const sessionId = await getOrCreateSessionId();

    // Check rate limits
    const rateLimitResult = await checkRateLimits(ip, sessionId);
    console.log('[test-web-call] Rate limit check:', rateLimitResult);

    if (!rateLimitResult.allowed) {
      console.warn('[test-web-call] Rate limit exceeded:', rateLimitResult.reason);
      return NextResponse.json(
        {
          error: rateLimitResult.reason,
          message: rateLimitResult.message,
          callCount: rateLimitResult.callCount,
        },
        { status: 429 }
      );
    }

    // Create Retell web call
    console.log('[test-web-call] Creating Retell web call with agentId:', agentId);
    const retellData = await createRetellWebCall({
      agentId,
      agentVersion,
      metadata,
      retell_llm_dynamic_variables,
    });
    console.log('[test-web-call] Retell web call created successfully');

    // Track the call
    await Promise.all([
      incrementCallCount(ip, sessionId),
      incrementDailyBudget(2), // Estimate 2 minutes per call
      setSessionCookie(sessionId),
    ]);

    console.log('[test-web-call] Request completed successfully');
    return NextResponse.json({
      data: retellData,
      callCount: rateLimitResult.callCount + 1,
    });
  } catch (error) {
    console.error('Error in /api/retell/test-web-call:', error);

    // Handle Retell API errors with specific status codes
    if (error.status) {
      return NextResponse.json(
        {
          error: 'retell_api_failed',
          message: error.message,
          details: error.details,
        },
        { status: error.status }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        error: 'internal_error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
