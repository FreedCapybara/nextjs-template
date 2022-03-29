import { Provider } from 'react-redux';
import { store } from '@app/store';
import '@styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

