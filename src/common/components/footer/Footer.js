import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './Footer.module.scss';

import theme from '@app/theme';

import { FiExternalLink } from 'react-icons/fi';
import { Logo } from '@components/Logo';

export function Footer(props) {
  const { data: session } = useSession();

  return (
    <div className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          <div className={styles.footerTitleWrapper}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.appTitle}>
                {theme.appName}
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.footerContent}>
          <Link href="/demo/components">
            <a className="text-button">
              Components
            </a>
          </Link>

          <Link href="/demo/pages">
            <a className="text-button">
              Pages
            </a>
          </Link>

          <a
            className="text-button"
            href="https://github.com/FreedCapybara/nextjs-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FiExternalLink />
          </a>

          {session ? (
            <>
            <button className="text-button" onClick={signIn}>
              Sign in
            </button>

            <Link href="/signup">
              <a className="text-button">
                Sign up
              </a>
            </Link>
            </>
          ) : (
            <Link href="/account">
              <a className="text-button">
                Account
              </a>
            </Link>
          )}
        </div>
      </div>

      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          <address>
            555 Street St.<br />
            City, ST 55555
          </address>
          <a href="mailto:customerservice@yourcompany.com">
            customerservice@yourcompany.com
          </a>
        </div>
      </div>

      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          &copy; {new Date().getFullYear()} YourCompany LLC &bull; <a href="https://your-company.com">yourcompany.com</a>
        </div>

        <div className={styles.footerContent}>
          <Link href="/legal/terms-and-conditions">
            <a>
              Terms &amp; conditions
            </a>
          </Link>
          <Link href="/legal/privacy-policy">
            <a>
              Privacy policy
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
};

