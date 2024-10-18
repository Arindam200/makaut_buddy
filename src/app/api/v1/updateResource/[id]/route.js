import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongoose.js';
import Resource from '../../../../models/Resource.js';
import { rateLimitMiddleware } from '../../../_middleware/rateLimit.js';

async function PUTREQ(request, { params }) {
  await dbConnect();

  const { id } = params;
  const body = await request.json();
  // const token = request.headers.get("authorization")?.replace("Bearer-", "");

  // if (token !== process.env.SECRET) {
  //   return NextResponse.json({ boo: "hoo", jokes: "on you!" }, { status: 400 });
  // }

  try {
    const document = await Resource.findByIdAndUpdate(id, body, { new: true });
    if (!document) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }
    return NextResponse.json({ msg: "updated successfully", data: document }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 403 });
  }
}

export const PUT = rateLimitMiddleware(PUTREQ);
