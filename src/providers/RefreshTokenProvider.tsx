"use client";

import { useEffect } from "react";

import { useRouter } from "nextjs-toploader/app";

import { BaseComponentProps } from "@/components/types";
import { useRefreshTokenMutation } from "@/services/auth";
import { getToken, setToken, tokenParser } from "@/utils/token";

export const RefreshTokenProvider = ({ children }: BaseComponentProps) => {
  const { refresh: refreshRouter } = useRouter();
  const [refreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    const refreshTokeTimeout =
      Number(process.env.NEXT_PUBLIC_REFRESH_TOKEN_TIMEOUT) * 1000;

    let isRefreshing = false;

    const checkAndRefreshToken = async () => {
      const token = getToken("access");
      const refresh = getToken("refresh");

      if (!refresh) return;

      const now = Date.now();
      const parsedToken = token ? tokenParser(token) : null;

      if (token && parsedToken?.exp * 1000 - now < refreshTokeTimeout) {
        if (isRefreshing) return;
        isRefreshing = true;
        try {
          const { access, refresh } = await refreshToken().unwrap();
          if (process.env.NEXT_PUBLIC_ORIGIN == "app") {
            if (window.ReactNativeWebView) {
              const message = JSON.stringify({
                message: "TOKEN",
                data: {
                  access,
                  refresh,
                },
              });
              window.ReactNativeWebView.postMessage(message);
            }
          } else {
            const newParsedToken = tokenParser(access);
            setToken(
              "access",
              access,
              Math.ceil(newParsedToken.exp - now / 1000),
            );
            refreshRouter();
          }
        } catch (error) {
          console.log("Failed to refresh token", error);
        } finally {
          isRefreshing = false;
        }
      } else if (!token && refresh) {
        if (isRefreshing) return;
        isRefreshing = true;
        try {
          const { access, refresh } = await refreshToken().unwrap();
          if (process.env.NEXT_PUBLIC_ORIGIN == "app") {
            if (window.ReactNativeWebView) {
              const message = JSON.stringify({
                message: "TOKEN",
                data: {
                  access,
                  refresh,
                },
              });
              window.ReactNativeWebView.postMessage(message);
            }
          } else {
            const newParsedToken = tokenParser(access);
            setToken(
              "access",
              access,
              Math.ceil(newParsedToken.exp - now / 1000),
            );
            refreshRouter();
          }
        } catch (error) {
          console.log("Failed to refresh token", error);
        } finally {
          isRefreshing = false;
        }
      }
    };

    checkAndRefreshToken();

    const interval = setInterval(() => {
      checkAndRefreshToken();
    }, 1000);

    return () => clearInterval(interval);
  }, [refreshToken]);

  return children;
};
