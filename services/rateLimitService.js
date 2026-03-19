import { getRedisClient } from '../lib/redis.js';

const MAX_LIVE_CALLS_PER_DAY = 2;
const MAX_DAILY_BUDGET = 10; // $10 per day
const COST_PER_MINUTE = 0.19; // $0.19 per minute
const ONE_DAY_IN_SECONDS = 86400;

export async function getCallCount(ip, sessionId) {
  const redis = getRedisClient();
  const ipKey = `retell:calls:ip:${ip}`;
  const sessionKey = `retell:calls:session:${sessionId}`;

  const [ipCount, sessionCount] = await Promise.all([
    redis.get(ipKey),
    redis.get(sessionKey),
  ]);

  return Math.max(Number(ipCount) || 0, Number(sessionCount) || 0);
}

export async function incrementCallCount(ip, sessionId) {
  const redis = getRedisClient();
  const ipKey = `retell:calls:ip:${ip}`;
  const sessionKey = `retell:calls:session:${sessionId}`;

  await Promise.all([redis.incr(ipKey), redis.incr(sessionKey)]);

  // Set expiration to end of day (24 hours)
  await Promise.all([
    redis.expire(ipKey, ONE_DAY_IN_SECONDS),
    redis.expire(sessionKey, ONE_DAY_IN_SECONDS),
  ]);
}

export async function getDailyBudget() {
  const redis = getRedisClient();
  const budgetKey = 'retell:budget:daily';
  const budget = await redis.get(budgetKey);
  return Number(budget) || 0;
}

export async function incrementDailyBudget(estimatedMinutes = 2) {
  const redis = getRedisClient();
  const budgetKey = 'retell:budget:daily';
  const amount = estimatedMinutes * COST_PER_MINUTE;

  await redis.incrbyfloat(budgetKey, amount);
  await redis.expire(budgetKey, ONE_DAY_IN_SECONDS);
}

export async function checkRateLimits(ip, sessionId) {
  const [callCount, dailyBudgetUsed] = await Promise.all([
    getCallCount(ip, sessionId),
    getDailyBudget(),
  ]);

  if (dailyBudgetUsed >= MAX_DAILY_BUDGET) {
    return {
      allowed: false,
      reason: 'budget_exceeded',
      message: 'Daily budget limit reached',
      callCount,
    };
  }

  if (callCount >= MAX_LIVE_CALLS_PER_DAY) {
    return {
      allowed: false,
      reason: 'rate_limit_exceeded',
      message: 'Maximum live calls per day reached',
      callCount,
    };
  }

  return {
    allowed: true,
    callCount,
  };
}
