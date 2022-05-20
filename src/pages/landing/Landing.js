import styles from './Landing.module.scss'

import { LandingPageLayout } from '@components/LandingPageLayout';
import { LandingPageSection } from '@components/LandingPageSection';
import { Hero } from '@components/Hero';

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

