import { wrapper } from '@config/redux.config';
import '@styles/globals.scss';

function App({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}

export default wrapper.withRedux(App);

