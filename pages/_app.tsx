import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, createClient } from 'urql'

const client = createClient({
  url: '/api/graphql',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
