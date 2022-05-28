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
import { LoadingSpinner } from '@components/LoadingSpinner';
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
          <div className={styles.titleWrapper}>
            <Logo />
            <h1>Components</h1>
          </div>
          <p>
            A demo of the built-in UI elements.
            <br />
            They're all included in the source code for this app,
            so you can easily change them to your liking!
          </p>

          {/* Avatar */}
          <div className={styles.componentSection}>
            <h3>&lt;Avatar /&gt;</h3>
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

          {/* AvatarMenu */}
          <div className={styles.componentSection}>
            <h3>&lt;AvatarMenu /&gt;</h3>
            <p>
              Creates a menu from the avatar. Great for logged-in users! (Try clicking it)
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

          {/* DeleteButton */}
          <div className={styles.componentSection}>
            <h3>&lt;DeleteButton /&gt;</h3>
            <p>
              A button that requires multiple clicks before firing its action.
            </p>
            <DeleteButton onDelete={() => alert('Deleted!')} />
          </div>

          {/* Emoji */}
          <div className={styles.componentSection}>
            <h3>&lt;Emoji /&gt;</h3>
            <p>
              Normalizes emoji text styles, ensuring they render sharply and in color.
            </p>
            <div className={styles.largeTextWrapper}>
              <Emoji>&#x1f680;</Emoji>
              <Emoji>&#x1f44d;</Emoji>
              <Emoji>&#x1f389;</Emoji>
              <Emoji>&#x1f525;</Emoji>
              <Emoji>&#x1f953;</Emoji>
              <Emoji>&#x1f363;</Emoji>
              <Emoji>&#x1f408;</Emoji>
            </div>
          </div>

          {/* EmptyState */}
          <div className={styles.componentSection}>
            <h3>&lt;EmptyState /&gt;</h3>
            <p>
              Show this when you don't have any data to display.
              The image is configurable in app/theme.js!
            </p>
            <div className={styles.flexStartWrapper}>
              <EmptyState>
                No records found.
              </EmptyState>
            </div>
          </div>

          {/* ErrorMessage */}
          <div className={styles.componentSection}>
            <h3>&lt;ErrorMessage /&gt;</h3>
            <p>Styles error messages consistently.</p>
            <div className={styles.flexStartWrapper}>
              <ErrorMessage>
                <Emoji>&#x1f480;&#x1f525;</Emoji> CRITICAL_FAILURE <Emoji>&#x1f525;&#x1f480;</Emoji>
              </ErrorMessage>
            </div>
          </div>

          {/* FileDrop */}
          <div className={styles.componentSection}>
            <h3>&lt;FileDrop /&gt;</h3>
          </div>

          {/* FilePicker */}
          <div className={styles.componentSection}>
            <h3>&lt;FilePicker /&gt;</h3>
          </div>

          {/* Form */}
          <div className={styles.componentSection}>
            <h3>&lt;Form /&gt;</h3>
          </div>

          {/* FormField */}
          <div className={styles.componentSection}>
            <h3>&lt;FormField /&gt;</h3>
          </div>

          {/* LoadingSpinner */}
          <div className={styles.componentSection}>
            <h3>&lt;LoadingSpinner /&gt;</h3>
          </div>

          {/* Logo */}
          <div className={styles.componentSection}>
            <h3>&lt;Logo /&gt;</h3>
          </div>

          {/* Modal */}
          <div className={styles.componentSection}>
            <h3>&lt;Modal /&gt;</h3>
          </div>

          {/* NavMenu */}
          <div className={styles.componentSection}>
            <h3>&lt;NavMenu /&gt;</h3>
          </div>

          {/* ProgressBar */}
          <div className={styles.componentSection}>
            <h3>&lt;ProgressBar /&gt;</h3>
          </div>

          {/* Swatch */}
          <div className={styles.componentSection}>
            <h3>&lt;Swatch /&gt;</h3>
          </div>

          {/* Tab */}
          <div className={styles.componentSection}>
            <h3>&lt;Tab /&gt;</h3>
          </div>

          {/* TabBar */}
          <div className={styles.componentSection}>
            <h3>&lt;TabBar /&gt;</h3>
          </div>

          {/* ToggleSwitch */}
          <div className={styles.componentSection}>
            <h3>&lt;ToggleSwitch /&gt;</h3>
          </div>

          {/* ValidatedInput */}
          <div className={styles.componentSection}>
            <h3>&lt;ValidatedInput /&gt;</h3>
          </div>
        </div>
      </div>
    </CenteredLayout>
  );
}

