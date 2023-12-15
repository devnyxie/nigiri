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

export function formatDateString(inputDateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const inputDate = new Date(inputDateString);
  const formattedDate = inputDate.toLocaleDateString('en-US', options);
  return formattedDate;
}
