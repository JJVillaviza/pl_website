import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import NavigationBar from "@/components/navigationbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row min-h-screen w-full bg-muted/40">
          <SideBar />
          <div className="flex flex-col">
            <NavigationBar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
