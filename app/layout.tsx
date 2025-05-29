import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata = {
  title: "ვტოსკოლა მართვისმოწმობა",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo/logo.jpg"
          sizes="any"
          className="rounded-full"
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
