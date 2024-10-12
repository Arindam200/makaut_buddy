import { NextResponse } from 'next/server';

const rateLimit = 10; 
const rateLimitPeriod = 60 * 1000; 

const ipRequestCounts = new Map();

export function rateLimitMiddleware(handler) {
  return async function (request, ...args) {
    const ip = request.ip || 'anonymous';
    const now = Date.now();
    console.log(ipRequestCounts);
    const requestLog = ipRequestCounts.get(ip) || [];
    console.log(requestLog);
    const recentRequests = requestLog.filter(time => now - time < rateLimitPeriod);
    console.log(recentRequests);
    if (recentRequests.length >= rateLimit) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    recentRequests.push(now);
    ipRequestCounts.set(ip, recentRequests);

    return handler(request, ...args);
  };
}
