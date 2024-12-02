"use client"

import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import WhatsAppFloatingButton from '../src/components/widgets/WhatsAppFloatingButton';
import logo from './../src/assets/images/logo.jpg';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

 const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  icons: {
    icon: "/favicon.ico", // Chemin vers votre favicon
  },
  description: SITE.description,
};



import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function RootLayout({ children }: LayoutProps) {


  useEffect(() => {
    AOS.init({
      // duration: 500, // Durée en millisecondes
      easing: "ease-in-out", // Animation fluide
      once: true, // Animation uniquement lors du premier scroll
    });
  }, []);

  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
        <Providers>
          {/* <Announcement /> */}
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
