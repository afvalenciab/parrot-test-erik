import type { AppProps } from "next/app"
import wrapper from "../store/store"

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
