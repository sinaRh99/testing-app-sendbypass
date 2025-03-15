import Cookies from "js-cookie";

export const setTokens = ({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) => {
  window.location.href = `${process.env.NEXT_PUBLIC_APP_DEEP_LINK_URL}?access=${access}&refresh=${refresh}`;
};

export const setToken = (name: string, token: string, expire: number) => {
  Cookies.set(name, token, {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    expires: expire / (24 * 60 * 60),
  });
};

export const getToken = (name: string) => {
  return Cookies.get(name);
};

export const destroyToken = () => {
  Cookies.remove(`access`, {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
  });
  Cookies.remove(`refresh`, {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
  });
};

export const tokenParser = (token: string) => {
  if (token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(""),
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }
  return null;
};
