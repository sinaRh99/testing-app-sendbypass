"use client";

import { useEffect } from "react";

export default function CookieWatcher() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const cookies = document.cookie.split("; ");
      const hasAccess = cookies.some((cookie) => cookie.startsWith("access="));
      const hasRefresh = cookies.some((cookie) =>
        cookie.startsWith("refresh="),
      );
      if (window.ReactNativeWebView) {
        if (hasAccess && hasRefresh) {
          const message = JSON.stringify({
            message: "HAS-TOKEN",
          });
          window.ReactNativeWebView.postMessage(message);
        } else {
          const message = JSON.stringify({
            message: "NO-TOKEN",
          });
          window.ReactNativeWebView.postMessage(message);
        }
      }
    });

    observer.observe(document, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
