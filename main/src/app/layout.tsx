import React from 'react';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import cx from 'classnames';
import { Analytics } from '@vercel/analytics/react';

import './style.css';
import { Nav } from '../features/nav';
import Script from 'next/script';

const local = localFont({
  src: [
    {
      path: '../assets/fonts/archia-semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/archia-bold.woff2',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-headline'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_BASEURL),
  title: 'redbeak • break a few eggs to design for the web',
  description:
    'I pair my design tuned eyeballs with a React toolkit to create great web experiences',
  icons: 'favicon.png',
  openGraph: {
    type: 'website',
    title: 'redbeak',
    url: process.env.NEXT_BASEURL,
    locale: 'en-US',
    images: [
      {
        url: 'metadata.png'
      }
    ],
    description: 'I pair my design tuned eyeballs with a React toolkit to create great web experiences',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <html lang="en" className={cx(local.variable, inter.variable, 'light-theme')}>
      <body>
        {isProd ? <Script src="https://analytics.redbeak.net/js/script.js" defer={true} data-domain="redbeak.net" /> : null}
        <main>
          <Nav />
          {children}
        </main>
         <Analytics />
      </body>
    </html>
  );
}
