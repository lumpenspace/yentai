'use client'

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
        <link rel="stylesheet" href="https://use.typekit.net/cek5nuq.css" />
        <link rel="icon" href="/favicon.png" sizes="any" />


{children}  

</body>
      </html>
  );
}
