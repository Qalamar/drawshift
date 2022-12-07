import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GlobalStyles from 'components/GlobalStyles'
import '@fontsource/montserrat/variable.css'
import 'styles/globals.css'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </>
)

export default App
