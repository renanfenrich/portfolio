import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renan-fenrich.renanfenrich.chatgpt.site"),
  title: "Renan Fenrich | Senior DevOps Engineer",
  description:
    "Senior DevOps Engineer focused on AWS, Terraform, reliable delivery, security, and cloud modernization.",
  authors: [{ name: "Renan Fenrich", url: "https://www.linkedin.com/in/renanfenrich/" }],
  keywords: [
    "Senior DevOps Engineer",
    "AWS",
    "Terraform",
    "Cloud Engineering",
    "SRE",
    "Platform Engineering",
    "DevSecOps",
    "Brazil",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Renan Fenrich | Senior DevOps Engineer",
    description:
      "AWS platforms, infrastructure as code, reliable delivery, security, and cloud modernization backed by production evidence.",
    siteName: "Renan Fenrich",
  },
  twitter: {
    card: "summary",
    title: "Renan Fenrich | Senior DevOps Engineer",
    description:
      "AWS platforms, infrastructure as code, reliable delivery, security, and cloud modernization.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
