import { useState } from 'react';
import styles from './PagesDemo.module.scss';

import { CenteredLayout } from '@components/CenteredLayout';
import { Logo } from '@components/Logo';
import { Modal } from '@components/Modal';

import { Home } from '@pages/home/Home';
import { Landing } from '@pages/landing/Landing';

export function PagesDemo(props) {

  const [page, setPage] = useState(null);

  const bigModalStyle = {
    maxWidth: '100%',
    height: 'calc(100vh - 40px)',
    maxHeight: 'calc(100vh - 40px)',
    overflowY: 'auto'
  };

  return (
    <CenteredLayout
      title="Components"
      backRoute="/"
      backText="Home"
    >
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.titleWrapper}>
            <Logo />
            <h1>Pages</h1>
          </div>
          <p>
            A demo of the built-in pages.
            <br />
            Some of them aren't used in this demo app (like forgot/reset password), but they're all ready to go!
            Otherwise you can simply delete the ones you won't need.
          </p>

          {/* Landing */}
          <div className={styles.section}>
            <h3>&lt;Landing /&gt;</h3>
            <p>The landing page! This is the introduction to your app or website, and serves as the home page for unauthenticated users.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('landing')}
            >
              <div className={styles.pageComponentWrapper}>
                <Landing />
              </div>
            </div>
          </div>

          {page === 'landing' && (
            <Modal
              title="Example page"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={styles.pageComponentWrapper}>
                <Landing />
              </div>
            </Modal>
          )}

          {/* Home */}
          <div className={styles.section}>
            <h3>&lt;Home /&gt;</h3>
            <p>The home page for authenticated users.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('home')}
            >
              <div className={styles.pageComponentWrapper}>
                <Home />
              </div>
            </div>
          </div>

          {page === 'home' && (
            <Modal
              title="Example page"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={styles.pageComponentWrapper}>
                <Home />
              </div>
            </Modal>
          )}
        </div>
      </div>
    </CenteredLayout>
  );
}

