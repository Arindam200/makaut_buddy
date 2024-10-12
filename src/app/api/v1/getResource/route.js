import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongoose.js';
import Resource from '../../../models/Resource.js';
import { rateLimitMiddleware } from '../../_middleware/rateLimit.js';

async function GETREQ(request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const subject = searchParams.get('sub');
  // const token = request.headers.get("authorization")?.replace("Bearer-", "");

  // if (token !== process.env.SECRET) {
  //   return NextResponse.json({ boo: "hoo", jokes: "on you!" }, { status: 400 });
  // }

  try {
    const documents = await Resource.find({ subject: subject });
    return NextResponse.json({ documents }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 403 });
  }
}

export const GET = rateLimitMiddleware(GETREQ);





