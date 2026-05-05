import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zura Studio | Creative Agency",
  description: "Zura Studio - We build creative and amazing digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
