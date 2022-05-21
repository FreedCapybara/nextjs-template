import styles from './PagesDemo.module.scss';

import { LandingPageLayout } from '@components/LandingPageLayout';
import { Hero } from '@components/Hero';

export function PagesDemo(props) {
  return (
    <LandingPageLayout title="Pages">
      <Hero>
        <h1>Pages demo</h1>
      </Hero>
    </LandingPageLayout>
  );
}

