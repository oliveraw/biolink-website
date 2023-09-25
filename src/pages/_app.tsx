import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports'
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

Amplify.configure(awsconfig);

const NO_NAV_ROUTES = ['/', '/login']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { route } = router

  if (NO_NAV_ROUTES.includes(route)) {
    return <Component {...pageProps} />
  } else {
    // add the menu to all pages which arent in the NO_NAV_ROUTES list
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
