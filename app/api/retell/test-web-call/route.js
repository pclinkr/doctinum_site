import { NextResponse } from 'next/server';
import { getClientIdentifier, getOrCreateSessionId, setSessionCookie } from '../../../../services/sessionService.js';
import { checkRateLimits, incrementCallCount, incrementDailyBudget } from '../../../../services/rateLimitService.js';
import { createRetellWebCall } from '../../../../services/retellService.js';

export async function POST(request) {
  try {
    const payload = await request.json();
    const { agentId, metadata, retell_llm_dynamic_variables } = payload;

    // Get client identifiers
    const ip = getClientIdentifier(request);
    const sessionId = await getOrCreateSessionId();

    // Check rate limits
    const rateLimitResult = await checkRateLimits(ip, sessionId);

    if (!rateLimitResult.allowed) {
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
    const retellData = await createRetellWebCall({
      agentId,
      metadata,
      retell_llm_dynamic_variables,
    });

    // Track the call
    await Promise.all([
      incrementCallCount(ip, sessionId),
      incrementDailyBudget(2), // Estimate 2 minutes per call
      setSessionCookie(sessionId),
    ]);

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
