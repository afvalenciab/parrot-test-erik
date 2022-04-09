import type { AppProps } from "next/app"

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default WrappedApp
