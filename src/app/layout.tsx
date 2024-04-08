import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@/store/providers/UserProvider";
import EdamamProvider from "@/store/providers/EdamamProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Finder Web App",
  description: "Find your recipe for your dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <EdamamProvider>{children}</EdamamProvider>
        </UserProvider>
      </body>
    </html>
  );
}
