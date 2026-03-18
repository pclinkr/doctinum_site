import { NextResponse } from 'next/server';

const RETELL_API_URL = 'https://api.retellai.com/v2/create-web-call';

export async function POST(request) {
  try {
    const payload = await request.json();
    const { agentId, metadata, retell_llm_dynamic_variables } = payload;

    const apiKey = process.env.RETELL_DEMO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'missing_api_key',
          message: 'DOCTINUM_DEMO_API_KEY is not configured on the server',
        },
        { status: 500 }
      );
    }

    const retellPayload = {
      agent_id: agentId || process.env.ORTHO_RETELL_AGENT_ID,
      agent_version: 0,
    };

    if (metadata) {
      retellPayload.metadata = metadata;
    }

    retellPayload.retell_llm_dynamic_variables = {
      next_call_time: "neuf heures demain matin",
      organization_name_with_article: "la Clinique Lumière",
      patient_name: "Jean Dupont",
      recall_time: "neuf heures",
      say_trust_phrase: "false",
      trust_phrase: "himalaya",
      ask_consent: "true",
      authenticate_with_year_of_birth: "false",
      organization_name_with_from: "de la Clinique Lumière",
      authenticate_with_pin_code: "false",
      test_mode: "true",
      ...retell_llm_dynamic_variables
    };

    const retellResponse = await fetch(RETELL_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(retellPayload),
    });

    if (!retellResponse.ok) {
      const errorText = await retellResponse.text();
      console.error('Retell API error:', retellResponse.status, errorText);
      return NextResponse.json(
        {
          error: 'retell_api_failed',
          message: `Retell API returned status ${retellResponse.status}`,
          details: errorText,
        },
        { status: retellResponse.status }
      );
    }

    const retellData = await retellResponse.json();

    return NextResponse.json({
      data: {
        accessToken: retellData.access_token,
        callId: retellData.call_id,
        agentId: retellData.agent_id,
      },
    });
  } catch (error) {
    console.error('Error in /api/retell/test-web-call:', error);
    return NextResponse.json(
      {
        error: 'internal_error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
