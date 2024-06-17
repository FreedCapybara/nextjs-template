import { useState } from 'react';
import Link from 'next/link';
import styles from './PagesDemo.module.scss';

import { FiArrowLeft } from 'react-icons/fi';
import { CenteredLayout } from '@components/CenteredLayout';
import { Logo } from '@components/Logo';
import { Modal } from '@components/Modal';

import { Home } from '@pages/home/Home';
import { Landing } from '@pages/landing/Landing';
import { Login } from '@pages/login/Login';
import { Signup } from '@pages/signup/Signup';
import { Account } from '@pages/account/Account';
import { AccountConfirmation } from '@pages/account/account-confirmation/AccountConfirmation';
import { EditProfile } from '@pages/account/edit-profile/EditProfile';
import { ForgotPassword } from '@pages/account/forgot-password/ForgotPassword';
import { ResetPassword } from '@pages/account/reset-password/ResetPassword';
import { Sandbox } from '@pages/sandbox/Sandbox';
import { PrivacyPolicy } from '@pages/legal/privacy-policy/PrivacyPolicy';
import { TermsAndConditions } from '@pages/legal/terms-and-conditions/TermsAndConditions';
import { NotFound } from '@pages/not-found/NotFound';
import { ServerError } from '@pages/server-error/ServerError';

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
              title="Landing"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
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
              title="Home"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <Home />
              </div>
            </Modal>
          )}

          {/* Login */}
          <div className={styles.section}>
            <h3>&lt;Login /&gt;</h3>
            <p>The login page. Uses NextAuth.js, and comes out of the box with GitHub login.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('login')}
            >
              <div className={styles.pageComponentWrapper}>
                <Login providers={[{ id: 'github', name: 'GitHub' }]} />
              </div>
            </div>
          </div>

          {page === 'login' && (
            <Modal
              title="Login"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <Login providers={[{ id: 'github', name: 'GitHub' }]} />
              </div>
            </Modal>
          )}

          {/* Signup */}
          <div className={styles.section}>
            <h3>&lt;Signup /&gt;</h3>
            <p>The account creation page, for OAuth or traditional sign ups.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('signup')}
            >
              <div className={styles.pageComponentWrapper}>
                <Signup />
              </div>
            </div>
          </div>

          {page === 'signup' && (
            <Modal
              title="Signup"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <Signup />
              </div>
            </Modal>
          )}

          {/* Account */}
          <div className={styles.section}>
            <h3>&lt;Account /&gt;</h3>
            <p>View and edit account details.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('account')}
            >
              <div className={styles.pageComponentWrapper}>
                <Account />
              </div>
            </div>
          </div>

          {page === 'account' && (
            <Modal
              title="Account"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <Account />
              </div>
            </Modal>
          )}

          {/* AccountConfirmation */}
          <div className={styles.section}>
            <h3>&lt;AccountConfirmation /&gt;</h3>
            <p>Confirmation page for multi-factor authentication.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('account-confirmation')}
            >
              <div className={styles.pageComponentWrapper}>
                <AccountConfirmation />
              </div>
            </div>
          </div>

          {page === 'account-confirmation' && (
            <Modal
              title="AccountConfirmation"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <AccountConfirmation />
              </div>
            </Modal>
          )}

          {/* EditProfile */}
          <div className={styles.section}>
            <h3>&lt;EditProfile /&gt;</h3>
            <p>Allows users to edit their profile.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('edit-profile')}
            >
              <div className={styles.pageComponentWrapper}>
                <EditProfile />
              </div>
            </div>
          </div>

          {page === 'edit-profile' && (
            <Modal
              title="EditProfile"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <EditProfile />
              </div>
            </Modal>
          )}

          {/* ForgotPassword */}
          <div className={styles.section}>
            <h3>&lt;ForgotPassword /&gt;</h3>
            <p>Request password resets here. It happens.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('forgot-password')}
            >
              <div className={styles.pageComponentWrapper}>
                <ForgotPassword />
              </div>
            </div>
          </div>

          {page === 'forgot-password' && (
            <Modal
              title="ForgotPassword"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <ForgotPassword />
              </div>
            </Modal>
          )}

          {/* ResetPassword */}
          <div className={styles.section}>
            <h3>&lt;ResetPassword /&gt;</h3>
            <p>After a user requests a password reset from the ForgotPassword page, this is where they can actually reset it.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('reset-password')}
            >
              <div className={styles.pageComponentWrapper}>
                <ResetPassword />
              </div>
            </div>
          </div>

          {page === 'reset-password' && (
            <Modal
              title="ResetPassword"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <ResetPassword />
              </div>
            </Modal>
          )}

          {/* Sandbox */}
          <div className={styles.section}>
            <h3>&lt;Sandbox /&gt;</h3>
            <p>A blank canvas where you can write code and test things out!</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('sandbox')}
            >
              <div className={styles.pageComponentWrapper}>
                <Sandbox />
              </div>
            </div>
          </div>

          {page === 'sandbox' && (
            <Modal
              title="Sandbox"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <Sandbox />
              </div>
            </Modal>
          )}

          {/* PrivacyPolicy */}
          <div className={styles.section}>
            <h3>&lt;PrivacyPolicy /&gt;</h3>
            <p>Privacy policy page.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('privacy-policy')}
            >
              <div className={styles.pageComponentWrapper}>
                <PrivacyPolicy />
              </div>
            </div>
          </div>

          {page === 'privacy-policy' && (
            <Modal
              title="PrivacyPolicy"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <PrivacyPolicy />
              </div>
            </Modal>
          )}

          {/* TermsAndConditions */}
          <div className={styles.section}>
            <h3>&lt;TermsAndConditions /&gt;</h3>
            <p>Terms and conditions page.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('terms-and-conditions')}
            >
              <div className={styles.pageComponentWrapper}>
                <TermsAndConditions />
              </div>
            </div>
          </div>

          {page === 'terms-and-conditions' && (
            <Modal
              title="TermsAndConditions"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <TermsAndConditions />
              </div>
            </Modal>
          )}

          {/* NotFound */}
          <div className={styles.section}>
            <h3>&lt;NotFound /&gt;</h3>
            <p>The 404 page.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('not-found')}
            >
              <div className={styles.pageComponentWrapper}>
                <NotFound />
              </div>
            </div>
          </div>

          {page === 'not-found' && (
            <Modal
              title="NotFound"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <NotFound />
              </div>
            </Modal>
          )}

          {/* ServerError */}
          <div className={styles.section}>
            <h3>&lt;ServerError /&gt;</h3>
            <p>The server error page.</p>
            <div
              className={styles.pagePreview}
              onClick={() => setPage('server-error')}
            >
              <div className={styles.pageComponentWrapper}>
                <ServerError />
              </div>
            </div>
          </div>

          {page === 'server-error' && (
            <Modal
              title="ServerError"
              modalStyle={bigModalStyle}
              onClose={() => setPage(null)}
            >
              <div className={`${styles.pageComponentWrapper} ${styles.pageMarginFix}`}>
                <ServerError />
              </div>
            </Modal>
          )}
        </div>
      </div>

      <div className={styles.returnButtonWrapper}>
        <Link href="/" className="big-button">

          <span className={styles.returnButtonContent}>
            <FiArrowLeft />&nbsp;Back to home
          </span>

        </Link>
      </div>
    </CenteredLayout>
  );
}

