import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "80th Birthday Celebration — Mrs. Victoria Oluyemisi Ogunseinde",
  description:
    "Guest check-in for the 80th Birthday Celebration of Mrs. Victoria Oluyemisi Ogunseinde on June 2, 2026.",
  openGraph: {
    title: "80th Birthday Celebration — Mrs. Victoria Oluyemisi Ogunseinde",
    description: "Join us in celebrating 80 wonderful years. June 2, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
