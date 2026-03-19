import { Redis } from '@upstash/redis';

let redisInstance = null;

export function getRedisClient() {
  if (!redisInstance) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
      throw new Error(
        'Missing Upstash Redis credentials. Please set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in your environment variables.'
      );
    }

    redisInstance = new Redis({
      url,
      token,
    });
  }

  return redisInstance;
}
