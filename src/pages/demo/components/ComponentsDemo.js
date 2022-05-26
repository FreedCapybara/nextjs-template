import styles from './ComponentsDemo.module.scss';

import { CenteredLayout } from '@components/CenteredLayout';

import { Avatar } from '@components/Avatar';
import { AvatarMenu } from '@components/AvatarMenu';
import { DeleteButton } from '@components/DeleteButton';
import { Emoji } from '@components/Emoji';
import { EmptyState } from '@components/EmptyState';
import { ErrorMessage } from '@components/ErrorMessage';
import { FileDrop } from '@components/FileDrop';
import { FilePicker } from '@components/FilePicker';
import { Form } from '@components/Form';
import { FormField } from '@components/FormField';
import { Logo } from '@components/Logo';
import { Modal } from '@components/Modal';
import { NavMenu } from '@components/NavMenu';
import { ProgressBar } from '@components/ProgressBar';
import { Swatch } from '@components/Swatch';
import { Tab } from '@components/Tab';
import { TabBar } from '@components/TabBar';
import { ToggleSwitch } from '@components/ToggleSwitch';
import { ValidatedInput } from '@components/ValidatedInput';

export function ComponentsDemo(props) {
  return (
    <CenteredLayout
      title="Components"
      backRoute="/"
      backText="Home"
    >
      <div className={styles.wrapper}>
        <div className="container">
          <h1>Components</h1>
          <p>
            A demo of the built-in UI elements.
            <br />
            Since they're just included in the source code for this app,
            you can change them to your liking!
          </p>

          <div className={styles.componentSection}>
            <h3>Avatar</h3>
            <p>
              Shows the <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">Gravatar image</a> for an email address!
              You can modify request parameters, such as the default image, in gravatar-utils.js (under common/utils/gravatar/).
            </p>
            <Avatar
              email="test@spacegiraffe.io"
              size="48"
              defaultImage="retro"
            />
          </div>

          <div className={styles.componentSection}>
            <h3>AvatarMenu</h3>
            <p>
              Creates a menu from the avatar. Great for logged-in users!
            </p>
            <AvatarMenu
              email="test@spacegiraffe.io"
              size="48"
              defaultImage="monsterid"
            >
              <a href="https://github.com/FreedCapybara/nextjs-template" target="_blank" rel="noopener noreferrer">
                Example 1
              </a>
              <a href="https://github.com/FreedCapybara/nextjs-template" target="_blank" rel="noopener noreferrer">
                Example 2
              </a>
              <a href="https://github.com/FreedCapybara/nextjs-template" target="_blank" rel="noopener noreferrer">
                Example 3
              </a>
            </AvatarMenu>
            <p>You can also align the menu to the right edge!</p>
            <AvatarMenu
              email="test@spacegiraffe.io"
              size="48"
              defaultImage="monsterid"
              align="right"
            >
              <a href="https://github.com/FreedCapybara/nextjs-template" target="_blank" rel="noopener noreferrer">
                Example 1
              </a>
              <a href="https://github.com/FreedCapybara/nextjs-template" target="_blank" rel="noopener noreferrer">
                Example 2
              </a>
              <a href="https://github.com/FreedCapybara/nextjs-template" target="_blank" rel="noopener noreferrer">
                Example 3
              </a>
            </AvatarMenu>
          </div>

          <div className={styles.componentSection}>
            <h3>DeleteButton</h3>
            <p>
              A button that requires multiple clicks before firing its action.
            </p>
            <DeleteButton onDelete={() => alert('Deleted!')} />
          </div>

          <div className={styles.componentSection}>
            <h3>Emoji</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>EmptyState</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>ErrorMessage</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>FileDrop</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>FilePicker</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>Form</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>FormField</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>Logo</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>Modal</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>NavMenu</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>ProgressBar</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>Swatch</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>Tab</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>TabBar</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>ToggleSwitch</h3>
          </div>

          <div className={styles.componentSection}>
            <h3>ValidatedInput</h3>
          </div>
        </div>
      </div>
    </CenteredLayout>
  );
}

