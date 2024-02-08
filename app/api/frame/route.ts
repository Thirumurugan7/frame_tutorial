import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
    let buttonId = req.body.untrustedData.buttonIndex || 2
    // const searchParams = req.nextUrl.searchParams
    const id:any = req.query.id
    
    const idAsNumber = parseInt(id)
    let backid;
    let curr;
    if (buttonId == 2) {
        // console.log("I am in Next")
        if (id == 4) {
            curr = 1
        }else{
        curr = id + 1
        }
    }

    else if (buttonId == 1) {
        // console.log("I am in Prev")
        if (id == 1) {
            curr = 4
        }
        else {
            curr = id - 1
        }
    }
    // if(idAsNumber === 1){
    // backid = 1
    // }else {
    // backid = idAsNumber - 1
    // }
    // if(idAsNumber === 4){
    // nextId = 1
    // }else{
    // nextId = idAsNumber + 1
    // }
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${idAsNumber}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_HOST}/farcaster${idAsNumber}.jpg" />
    <meta property="fc:frame:button:1" content="Back" />
    <meta property="fc:frame:button:2" content="Next" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_HOST}/api/frame?id=${curr}" />
  </head></html>`);

}


export const dynamic = 'force-dynamic';