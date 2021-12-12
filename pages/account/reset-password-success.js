import React from 'react';
import Link from 'next/link';

import { CenteredLayout } from '@components/layout';
import { Logo, LinkButton } from '@components/elements';

export class ResetPasswordSuccess extends React.Component {

  render() {
    return (
      <CenteredLayout title="Success!">
        <Logo height="108px" />

        <h2>
          Success!
        </h2>

        <Link href="/" passHref>
          <LinkButton>
            Back to login
          </LinkButton>
        </Link>
      </CenteredLayout>
    );
  }
}

export default ResetPasswordSuccess;

