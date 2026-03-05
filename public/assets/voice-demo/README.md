Voice demo assets for the homepage medical web-call section.

Recommended local files:

- `avatar-default.jpg` (agent portrait shown on the phone)
- `fallback-medical-call.mp3` (fallback audio conversation when live API call fails)

You can also use remote URLs (S3, Supabase Storage, Cloudflare R2) via env vars:

- `VITE_VOICE_DEMO_AVATAR_URL`
- `VITE_VOICE_DEMO_FALLBACK_AUDIO_URL`

Examples:

- Local: `/assets/voice-demo/avatar-default.jpg`
- Remote: `https://<bucket-or-cdn>/voice/avatar-default.jpg`
