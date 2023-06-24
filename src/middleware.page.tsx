import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ['/sign-in/:path*'],
}

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1]
	const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

        if (user === "tes" && pwd === "test") {
            return NextResponse.next()
        }
    }

     return new NextResponse('Auth required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"'
        }
      });
}