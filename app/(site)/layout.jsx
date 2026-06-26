import LayoutClient from './layout_client'
import './global.css'

export const metadata = {
  title: 'Integra Magna | Branding, Strategy, and UX UI Design Agency',
  description: 'Integra Magna is a strategic design agency that creates the digital product and brand experiences that elevate companies to their next exciting chapter.',
  keywords: [
    'Creative Design agency',
    'UX UI Design',
    'website development',
    'best website design',
    'Product design',
    'UX Design',
    'UI Design',
    'branding',
    'Marketing plans',
    'Integra Magna',
    'design',
  ],
  authors: [{ name: 'Integra Magna', url: 'https://integramagna.com' }],
  creator: 'Integra Magna',
  openGraph: {
    title: 'Integra Magna | Branding & UX/UI Design Agency',
    description: 'Integra Magna is a strategic design agency that creates the digital product and brand experiences that elevate companies to their next exciting chapter.',
    url: 'https://integramagna.com',
    siteName: 'Integra Magna',
    type: 'website',
    images: [
      {
        url: 'https://www.integramagna.com/twitter-image.png',
        width: 1200,
        height: 627,
        alt: 'Integra Magna Social Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Integra_Magna',
    title: 'Integra Magna | Branding & UX/UI Design Agency',
    images: [
      'https://www.integramagna.com/twitter-image.png',
    ],
  },
  metadataBase: new URL('https://integramagna.com'),
  alternates: {
    canonical: 'https://integramagna.com/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
