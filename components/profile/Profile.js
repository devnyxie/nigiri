import Image from 'next/image';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import MuiTooltip from '../tooltip/muiTooltip';
import { ProfilePicture, capitalizeFirstChar } from '../../utils/utils';
import { Avatar } from '@mui/material';

function socialLink(platform) {
  let link;
  switch (platform) {
    case 'steam':
      link = 'https://steamcommunity.com/id/';
      break;
    case 'linkedin':
      link = 'https://www.linkedin.com/in/';
      break;
    default:
      link = `https://www.${platform}.com/`;
      break;
  }
  return link;
}

function getAllSocialsFromConfig(config) {
  const social_buttons = [];
  try {
    let socials = [];

    for (const key in config) {
      if (key.includes('_username') && config[key] !== '') {
        const platform = key.replace('_username', '');
        if (platform !== 'buyMeACoffee') {
          const iconKey = `${platform}_icon`;
          if (config[iconKey]) {
            socials.push({
              platform,
              username: config[key],
              icon: config[iconKey],
            });
          } else {
            socials.push({
              platform,
              username: config[key],
              icon: config[iconKey],
            });
          }
        }
      }
    }

    for (let i = 0; i < socials.length; i++) {
      const platform = socials[i].platform;
      const username = socials[i].username;
      const icon = socials[i].icon;
      const icon_path = `/platforms/${icon ? icon : 'generic.svg'}`;
      social_buttons.push(
        <MuiTooltip key={`${platform}-${i}`} text={`My ${capitalizeFirstChar(platform)} account`}>
          <Link
            href={socialLink(platform) + username}
            target="_blank"
            className="social-badge p-2 rounded-2 me-2"
          >
            <Image src={icon_path} width={25} height={25} alt={platform} />
          </Link>
        </MuiTooltip>
      );
    }
    if (config.email_address) {
      social_buttons.push(
        <MuiTooltip key="email" text={`Send me an email`}>
          <Link
            href={`mailto:${config.email_address}`}
            target="_blank"
            className="social-badge p-2 rounded-2 me-2"
          >
            <Image src={'/email/mailbox.svg'} width={25} height={25} alt="Email" />
          </Link>
        </MuiTooltip>
      );
    }
    return social_buttons;
  } catch (error) {
    //do nothing
  } finally {
    return social_buttons;
  }
}

const Profile = memo(function Profile({ config }) {
  const socials = useMemo(() => getAllSocialsFromConfig(config), [config]);
  
  const show_info_block = useMemo(() => {
    return !!(
      config.name ||
      config.professional_identity ||
      config.email_address ||
      socials.length > 0
    );
  }, [config, socials.length]);
  return (
    <div
      className={`p-2 w-100 d-flex flex-column flex-md-row align-items-center align-items-md-start ${
        show_info_block
          ? 'justify-content-md-between'
          : 'justify-content-md-center'
      }`}
    >
      <ProfilePicture
        config={config}
        size={200}
        className="pfp d-flex d-md-none mb-4 mt-4"
      />
      {show_info_block && (
        <div>
          {config.name && (
            <div className="fw-bold" style={{ fontSize: '35px' }}>
              {config.name} {config.surname}
            </div>
          )}
          {config.professional_identity && <div>{config.professional_identity}</div>}
          {socials.length > 0 && (
            <div id="socials" className="d-flex w-100 pt-2">
              {socials}
            </div>
          )}
        </div>
      )}

      <ProfilePicture
        config={config}
        size={150}
        className="pfp d-none d-md-flex"
      />
    </div>
  );
});

export default Profile;
