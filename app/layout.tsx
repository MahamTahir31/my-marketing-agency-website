import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Maham Tahir | Marketing & Social Media Specialist",
  description:
    "Portfolio of Maham Tahir — Marketing & Social Media Strategist with 3+ years of experience in Content Writing, Social Media Visuals Designing, Social Media Management, and Marketing Strategy.",
  keywords: [
    "Maham Tahir",
    "Marketing Strategist",
    "Social Media Manager",
    "Content Writer",
    "Social Media Visuals Designer",
    "Digital Marketing",
    "Portfolio"
  ],
  authors: [{ name: "Maham Tahir" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#0b0f19] font-sans antialiased text-gray-100 selection:bg-blue-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
