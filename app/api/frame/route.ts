import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams
    const id:any = searchParams.get("id")
    const idAsNumber = parseInt(id)
    let backid;
    let nextId;
    if(idAsNumber === 1){
    backid = 1
    }else {
    backid = idAsNumber - 1
    }
    if(idAsNumber === 5){
    nextId = 1
    }else{
    nextId = idAsNumber + 1
    }
      return new NextResponse(`<!DOCTYPE html><html><head>
        <title>This is frame ${idAsNumber}</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_HOST}/image${idAsNumber}.jpeg" />
        <meta property="fc:frame:button:1" content="Next" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_HOST}/api/frame?id=${nextId}" />
        </head></html>`);

}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';