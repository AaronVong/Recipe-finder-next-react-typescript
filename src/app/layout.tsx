import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EdamamProvider from "@/store/providers/EdamamProvider";
import AuthProvider from "@/store/providers/AuthProvider";
import UserProvider from "@/store/providers/UserProvider";

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
        <AuthProvider>
          <UserProvider>
            <EdamamProvider>{children}</EdamamProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
