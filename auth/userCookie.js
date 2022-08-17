import cookies from 'js-cookie';

export const getUserFromCookie = () => {
  const cookie = cookies.get('auth');
  console.log(cookie);
  if (!cookie) {
    return;
  }
  return JSON.parse(JSON.stringify(cookie));
};

export const setUserCookie = user => {
  cookies.set('auth', user, {
    expires: 1 / 24
  });
};

export const removeUserCookie = () => cookies.remove('auth');