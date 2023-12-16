import { Avatar } from '@mui/material';

export function setCookie(name, value) {
  var now = new Date();
  var expirationDate = new Date();
  expirationDate.setFullYear(now.getFullYear() + 1);
  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expirationDate.toUTCString() +
    '; path=/';
}

export function getCookie(name) {
  var cookieName = name + '=';
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length));
    }
  }
  return null;
}

export function formatDateString(inputDateString, format, customSeparator) {
  let options;
  let date;
  if (format === 'full_date') {
    options = { year: 'numeric', month: 'long', day: 'numeric' };
    const inputDate = new Date(inputDateString);
    date = inputDate.toLocaleDateString('en-US', options);
  } else {
    options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const inputDate = new Date(inputDateString);
    // date = inputDate
    //   .toLocaleDateString('en-US', options)
    //   .replace(/(\d+)\/(\d+)\/(\d+)/, '$3/$1/$2');
    date = inputDate
      .toLocaleDateString('en-US', options)
      .replace(
        /(\d+)\/(\d+)\/(\d+)/,
        `$3${customSeparator ? customSeparator : '-'}$1${
          customSeparator ? customSeparator : '-'
        }$2`
      );
  }

  return date;
}

export function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function checkImageExists(url, callback) {
  var img = new Image();
  img.onload = function () {
    callback(true);
  };
  img.onerror = function () {
    callback(false);
  };
  img.src = url;
}

export function findKeys(config, includes) {
  const result = [];
  for (const key in config) {
    let new_obj = {};
    if (
      config.hasOwnProperty(key) &&
      key.includes(includes) &&
      config[key].includes(includes)
    ) {
      result[key] = config[key];
    }
    result.push(new_obj);
  }
  return result;
}

export function capitalizeText(text) {
  let words = text.split('_');
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  let transformedText = capitalizedWords.join(' ');
  return transformedText;
}

export function loadDefaults(config) {
  const defaults = {
    profile_picture_border: true,
    disable_about_me_page: false,
    disable_animated_underline: false,
    blog_preview_date_format: 'ISO_8601',
    max_posts_per_page: 8,
  };

  // Merge the defaults with the initial config from props
  const mergedConfig = { ...defaults, ...config };

  return mergedConfig;
}

export function ProfilePicture({ config, size, className }) {
  const name_surname = config.name + ' ' + config.surname;
  return (
    <div className={className}>
      {config.profile_picture ? (
        <img src={config.profile_picture} alt="Profile Image" width={200} />
      ) : (
        <Avatar
          {...stringAvatar(name_surname)}
          alt={name_surname}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {config.name?.charAt(0) ? config.name?.charAt(0) : null}
        </Avatar>
      )}
    </div>
  );
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
