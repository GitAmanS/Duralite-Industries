import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Duralite",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Created by Aman Imtiyaz Shaikh */}
        <Header>{children}</Header>
        <Footer/>

        {/* Created by Aman Imtiyaz Shaikh */}
      </body>
    </html>
  );
}
