import { AuthenticationProvider } from '@/contexts/AuthenticationContext'
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
      }}
    >
      <AuthenticationProvider>
        <Component {...pageProps} />
      </AuthenticationProvider>
    </MantineProvider>
  )
}
