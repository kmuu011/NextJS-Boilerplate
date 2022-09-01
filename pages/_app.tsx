import '../styles/reset.scss'
import '../styles/globals.scss'
import '../public/static/font/NanumSquareRound/style.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
