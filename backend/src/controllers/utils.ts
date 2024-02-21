import Auth from '../config/auth';

class Utils {
  getIdFromCookies(cookiesHeader: string): number {
    const cookies: { [key: string]: string } = cookiesHeader
      .split(';')
      .reduce((cookies: any, cookie) => {
        const [key, value] = cookie.trim().split('=');

        cookies[key] = value;

        return cookies;
      }, {});
    const payload = Auth.decodeJWT(cookies.tokenAuth); // tokenAuth é o nome do token gerado no login
    const userId = payload.sub;
    return userId;
  }
}

export default new Utils();
