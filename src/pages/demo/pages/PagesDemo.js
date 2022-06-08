import styles from './PagesDemo.module.scss';

import { CenteredLayout } from '@components/CenteredLayout';
import { Logo } from '@components/Logo';

export function PagesDemo(props) {
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
        </div>
      </div>
    </CenteredLayout>
  );
}

