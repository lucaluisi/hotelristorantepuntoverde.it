import "./globals.css";
import Script from "next/script";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Punto Verde" />
        <Script
          async
          src="/tracking-system/script.js"
          data-host-url="/tracking-system"
          data-website-id={`${process.env.UMAMI_WEBSITE_ID}`}
        />
      </head>
      {children}
    </html>
  );
}
