import { NextResponse, NextRequest, NextFetchEvent } from "next/server"

export const Middleware = async (
  request: NextRequest,
  event: NextFetchEvent
) => {
  const url = request.nextUrl.clone()
  const isRootRoute = url.pathname == "/"
  if (isRootRoute) {
    url.pathname = "/login"
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export default Middleware
