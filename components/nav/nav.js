import React from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

export class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>
                <FormattedMessage id="nav-home" defaultMessage="Home" description="Home navigation link" />
              </a>
            </Link>
          </li>
          <li>
            <a href="https://zeit.co/now">
              <FormattedMessage id="nav-zeit" defaultMessage="ZEIT" description="Company navigation link" />
            </a>
          </li>
          <li>
            <a href="https://github.com/zeit/next.js">
              <FormattedMessage id="nav-github" defaultMessage="GitHub" description="GitHub navigation link" />
            </a>
          </li>
        </ul>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </nav>
    );
  }
}

Nav.propTypes = {
  title: PropTypes.string
};

