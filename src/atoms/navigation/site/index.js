import React from 'react';
import {shape} from 'prop-types';
import {css} from 'glamor';
import Link from 'gatsby-link';
import layoutStyles from '../../../layoutStyles.json';

const listItemStyles = {padding: '0.5em', paddingLeft: 0};

export default function SiteNavigation({linkStyles}) {
  const enhancedLinkStyles = {
    fontWeight: 700,
    textDecoration: 'none',
    ':hover': {textDecoration: 'underline'},
    ...linkStyles
  };

  return (
    <ol style={{listStyle: 'none', display: 'flex', margin: 0, paddingLeft: layoutStyles.innerGutterWidth}}>
      <li className={css(listItemStyles)}><Link className={css(enhancedLinkStyles)} to="/">Home</Link></li>
      <li className={css(listItemStyles)}>
        <Link className={css(enhancedLinkStyles)} to="/archive">Past Meetings</Link>
      </li>
    </ol>
  );
}

SiteNavigation.propTypes = {linkStyles: shape()};
SiteNavigation.defaultProps = {linkStyles: {}};

