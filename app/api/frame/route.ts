import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  

      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 7</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_HOST}/farcaster1.jpg" />
    <meta property="fc:frame:button:1" content="Visit Farcaster" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta name="fc:frame:button:1:target" content="https://www.farcaster.xyz/" />
    <meta property="fc:frame:button:2" content="Visit Docs Farcaster" />
    <meta property="fc:frame:button:2:action" content="link" />
    <meta name="fc:frame:button:2:target" content="https://docs.farcaster.xyz/" />
  </head></html>`);

}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';