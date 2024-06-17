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

              <Logo />

            </Link>
            <Link href="/" className={styles.appTitle}>

              {theme.appName}

            </Link>
          </div>
        </div>

        <div className={styles.footerContent}>
          <Link href="/demo/components" className="text-button">
            
              Components
            
          </Link>

          <Link href="/demo/pages" className="text-button">
            
              Pages
            
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

            <Link href="/signup" className="text-button">
              
                Sign up
              
            </Link>
            </>
          ) : (
            <Link href="/account" className="text-button">
              
                Account
              
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
            
              Terms &amp; conditions
            
          </Link>
          <Link href="/legal/privacy-policy">
            
              Privacy policy
            
          </Link>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
};

