import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { wrapper } from '@app/store';
import '@styles/globals.scss';

function App({ Component, pageProps }) {
  const { session } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);

