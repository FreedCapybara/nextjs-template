import styles from './Landing.module.scss'

import { LandingPageLayout } from '@components/LandingPageLayout';
import { Hero } from '@components/Hero';
import { LandingPageSection } from '@components/LandingPageSection';

export function Landing() {
  return (
    <LandingPageLayout title="The ultimate Next.js boilerplate">
      <Hero>
        <h1>Landing</h1>
      </Hero>

      <LandingPageSection>
        <h1>Section 1</h1>
      </LandingPageSection>
    </LandingPageLayout>
  )
}

