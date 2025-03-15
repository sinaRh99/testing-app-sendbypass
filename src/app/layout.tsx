import { ReactNode } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import Script from "next/script";

import { robotoFont } from "@/configs";
import CookieWatcher from "@/layout/CookieWatcher";
import { Providers } from "@/providers";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sendbypass",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: ReactNode;
  auth: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${robotoFont.variable} antialiased bg-background overflow-x-hidden`}
      >
        <CookieWatcher />
        <AppRouterCacheProvider options={{ key: "css" }}>
          <Providers>
            {children}
            {auth}
          </Providers>
        </AppRouterCacheProvider>

        <Script id="intercom-setting">
          {`window.intercomSettings = {
                  api_base: "https://api-iam.intercom.io",
                  app_id: "mmk6mce2",
                };`}
        </Script>
        <Script id="intercom-script">
          {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/mmk6mce2';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`}
        </Script>
      </body>
      <CssBaseline />
    </html>
  );
}
