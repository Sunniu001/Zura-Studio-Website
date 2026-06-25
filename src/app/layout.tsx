import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zura Studio | Creative Agency",
  description: "Zura Studio - We create emotion driven by creativity and innovation.",
   icons: {
    icon: "/favicon.png",
  },
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
