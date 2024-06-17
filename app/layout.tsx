import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import WebChat from "@/hooks/3x";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Estal Staycation | Luxury Condos in Makati City & Santa Mesa, Manila",
  description: "Experience the ultimate urban retreat at Casa Estal Staycation. Our luxurious condos in Makati City and Santa Mesa, Manila, offer modern amenities, stylish interiors, and convenient access to vibrant city attractions. Perfect for both leisure and business travelers seeking comfort and sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className="md:scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <WebChat />
        <Toaster />
      </body>
    </html>
  );
}
