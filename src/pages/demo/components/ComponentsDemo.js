import styles from './ComponentsDemo.module.scss';

import { LandingPageLayout } from '@components/LandingPageLayout';
import { Hero } from '@components/Hero';

export function ComponentsDemo(props) {
  return (
    <LandingPageLayout title="Components">
      <Hero>
        <h1>Components demo</h1>
      </Hero>
    </LandingPageLayout>
  );
}

