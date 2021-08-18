import React from 'react';
import {
  IconExternal,
  IconFolder,
  IconInstagram,
  IconYouTube,
  IconTwitter,
  IconXbox,
} from '../../_assets';

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Xbox':
      return <IconXbox />;
    case 'Instagram':
      return <IconInstagram />;
    case 'YouTube':
      return <IconYouTube />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
