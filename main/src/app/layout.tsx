import React from 'react';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import cx from 'classnames';

import './style.css';
import { Nav } from '../features/nav';

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
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx(local.variable, inter.variable, 'light-theme')}>
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
