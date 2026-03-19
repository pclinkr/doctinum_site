const RETELL_API_URL = 'https://api.retellai.com/v2/create-web-call';

export async function createRetellWebCall({ agentId, metadata, retell_llm_dynamic_variables }) {
  const apiKey = process.env.RETELL_DEMO_API_KEY;

  if (!apiKey) {
    throw new Error('RETELL_DEMO_API_KEY is not configured on the server');
  }

  const retellPayload = {
    agent_id: agentId || process.env.ORTHO_RETELL_AGENT_ID,
    agent_version: 0,
  };

  if (metadata) {
    retellPayload.metadata = metadata;
  }

  retellPayload.retell_llm_dynamic_variables = {
    next_call_time: 'neuf heures demain matin',
    organization_name_with_article: 'la Clinique Lumière',
    patient_name: 'Guillaume Martin',
    recall_time: 'neuf heures',
    say_trust_phrase: 'false',
    trust_phrase: 'himalaya',
    ask_consent: 'true',
    authenticate_with_year_of_birth: 'false',
    organization_name_with_from: 'de la Clinique Lumière',
    authenticate_with_pin_code: 'false',
    test_mode: 'true',
    ...retell_llm_dynamic_variables,
  };

  const retellResponse = await fetch(RETELL_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(retellPayload),
  });

  if (!retellResponse.ok) {
    const errorText = await retellResponse.text();
    console.error('Retell API error:', retellResponse.status, errorText);
    
    const error = new Error(`Retell API returned status ${retellResponse.status}`);
    error.status = retellResponse.status;
    error.details = errorText;
    throw error;
  }

  const retellData = await retellResponse.json();

  return {
    accessToken: retellData.access_token,
    callId: retellData.call_id,
    agentId: retellData.agent_id,
  };
}
