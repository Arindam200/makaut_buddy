import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongoose.js';
import Resource from '../../../models/Resource.js';
import { rateLimitMiddleware } from '../../_middleware/rateLimit.js';

async function POSTREQ(request) {
  await dbConnect();

  const body = await request.json();
  const token = request.headers.get("authorization")?.replace("Bearer-", "");

  if (token !== process.env.SECRET) {
    return NextResponse.json({ boo: "hoo", jokes: "on you!" }, { status: 400 });
  }

  try {
    const document = await Resource.create(body);
    return NextResponse.json({ document }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 403 });
  }
}

export const POST = rateLimitMiddleware(POSTREQ);