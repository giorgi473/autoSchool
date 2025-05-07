import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { AppProvider } from "@/app/context/AppContext";
import LayoutContent from "@/components/LayoutContent";

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
      <body className={`${inter.className}`}>
        <AppProvider>
          <LayoutContent>{children}</LayoutContent>
        </AppProvider>
      </body>
    </html>
  );
}
