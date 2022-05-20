import styles from './Landing.module.scss'

import { FiExternalLink } from 'react-icons/fi';
import { LandingPageLayout } from '@components/LandingPageLayout';
import { LandingPageSection } from '@components/LandingPageSection';
import { Hero } from '@components/Hero';
import { Emoji } from '@components/Emoji';

export function Landing() {
  return (
    <LandingPageLayout title="The ultimate Next.js boilerplate">
      <Hero>
        <h1>The ultimate Next.js boilerplate <Emoji>&#x1f680;</Emoji></h1>
        <h3>A fully featured app template to kick off your next project.</h3>
        <a
          className="cta-button"
          href="https://github.com/FreedCapybara/nextjs-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub <FiExternalLink />
        </a>
      </Hero>

      <LandingPageSection>
        <h1>Section 1</h1>
      </LandingPageSection>
    </LandingPageLayout>
  )
}

