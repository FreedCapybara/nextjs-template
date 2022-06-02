import { useState } from 'react';
import styles from './ComponentsDemo.module.scss';
import { range } from 'lodash-es';

import { CenteredLayout } from '@components/CenteredLayout';

import { Avatar } from '@components/Avatar';
import { AvatarMenu } from '@components/AvatarMenu';
import { DeleteButton } from '@components/DeleteButton';
import { Emoji } from '@components/Emoji';
import { EmptyState } from '@components/EmptyState';
import { ErrorMessage } from '@components/ErrorMessage';
import { FileDrop } from '@components/FileDrop';
import { FileDropZone } from '@components/FileDropZone';
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
  const [fileDragging, setFileDragging] = useState(false);
  const [fileData, setFileData] = useState(null);
  const [fileData2, setFileData2] = useState(null);
  const [toggleValue, setToggleValue] = useState(false);

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
            <p>
              Easily add drag-and-drop functionality to any page or component!
              The FileDrop component isn't visible by itself, but pairs well with the FileDropZone and FilePicker components.
            </p>
            <FileDrop
              multiple={false}
              onDragEnter={() => setFileDragging(true)}
              onDragLeave={() => setFileDragging(false)}
              onChange={(files) => setFileData(files[0])}
            >
              <FileDropZone
                dragging={fileDragging}
                fileSelected={!!fileData}
              >
                <p>
                  {fileData?.file.name || 'Drag-and-drop here!'}
                </p>
                <FilePicker
                  multiple={false}
                  label="filePicker"
                  onChange={(files) => setFileData(files[0])}
                >
                  Or browse files
                </FilePicker>
              </FileDropZone>
            </FileDrop>
            <p>
              The FileDrop component takes the width and height of its children.
              For this demo we only wrapped the drop zone component, which results in a pretty small drop area.
              In real life you should wrap the whole page so users can drop files anywhere!
            </p>
            <p>
              Please note that the FileDrop, FileDropZone, and FilePicker components are completely independent from each other, and do not require any specific component hierarchy.
            </p>
          </div>

          {/* FileDropZone */}
          <div className={styles.componentSection}>
            <h3>&lt;FileDropZone /&gt;</h3>
            <p>
              A drop zone component with various states of file selection.
            </p>
            <p>Default state:</p>
            <FileDropZone />
            <p>Dragging state:</p>
            <FileDropZone
              dragging={true}
            />
            <p>File selected state:</p>
            <FileDropZone
              fileSelected={true}
            />
            <p>Error/invalid state:</p>
            <FileDropZone
              error={true}
            />
            <p>
              As mentioned before, this component is completely independent of the other file components.
              Also note that it does not include any drag-and-drop or file selection functionality itself.
              Instead, it simply relies on props to determine its state.
            </p>
          </div>

          {/* FilePicker */}
          <div className={styles.componentSection}>
            <h3>&lt;FilePicker /&gt;</h3>
            <p>A nicely-styled file input.</p>
            <div className={styles.flexStartWrapper}>
              <FilePicker
                multiple={false}
                label="filePicker2"
                onChange={(files) => setFileData2(files[0])}
              >
                Choose file
              </FilePicker>
              <p>
                <em>{fileData2?.file.name || 'No file selected.'}</em>
              </p>
            </div>
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
            <p>A resizable loading spinner component.</p>
            <div className={`${styles.flexWrapper} ${styles.horizontalMargins}`}>
              <LoadingSpinner />
              <LoadingSpinner size={36} />
              <LoadingSpinner size={42} />
              <LoadingSpinner size={48} />
            </div>
            <p>You can also use an elevated container style.</p>
            <div className={`${styles.flexWrapper} ${styles.horizontalMargins}`}>
              <LoadingSpinner shadow={true} />
              <LoadingSpinner size={36} shadow={true} />
              <LoadingSpinner size={42} shadow={true} />
              <LoadingSpinner size={48} shadow={true} />
            </div>
          </div>

          {/* Logo */}
          <div className={styles.componentSection}>
            <h3>&lt;Logo /&gt;</h3>
            <p>The app logo, using the URL configured in app/theme.js. Can be resized!</p>
            <div className={`${styles.flexWrapper} ${styles.horizontalMargins}`}>
              <Logo size="36px" />
              <Logo size="54px" />
              <Logo size="4.5rem" />
            </div>
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
            <p>Shows progress! Fills the width of its container and operates within the range [0, 1].</p>
            <div className={`${styles.flexStartWrapper} ${styles.verticalMargins}`}>
              <ProgressBar progress={.15} />
              <ProgressBar progress={.35} />
              <ProgressBar progress={.55} />
              <ProgressBar progress={.75} />
            </div>
          </div>

          {/* Swatch */}
          <div className={styles.componentSection}>
            <h3>&lt;Swatch /&gt;</h3>
            <p>
              Add a splash of color to your text!
              This may seem like an insignificant component, but it can transform an otherwise bland, colorless layout into something much more pleasing to look at.
            </p>
            <div className={`${styles.flexWrapper} ${styles.horizontalMargins} ${styles.verticalMargins}`}>
              <Swatch color="grey">
                Grey
              </Swatch>
              <Swatch color="green">
                Green
              </Swatch>
              <Swatch color="purple">
                Purple
              </Swatch>
              <Swatch color="blue">
                Blue
              </Swatch>
              <Swatch color="tan">
                Tan
              </Swatch>
              <Swatch color="error">
                Error
              </Swatch>
              <Swatch color="warning">
                Warning
              </Swatch>
            </div>
            <p>The colors also map to numbers, which operate on a modulus and can be used in a loop!</p>
            <div className={`${styles.flexWrapper} ${styles.horizontalMargins} ${styles.verticalMargins}`}>
              {range(12).map((i) => (
                <Swatch color={i} key={i}>
                  {i.toString().padStart(2, '0')}
                </Swatch>
              ))}
            </div>
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
            <p>A fancy way of showing when something is on or off.</p>
            <div className={`${styles.flexStartWrapper} ${styles.verticalMargins}`}>
              <ToggleSwitch
                value={toggleValue}
                onChange={(newValue) => setToggleValue(newValue)}
              />
              <ToggleSwitch
                value={!toggleValue}
                onChange={(newValue) => setToggleValue(!newValue)}
              />
            </div>
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

