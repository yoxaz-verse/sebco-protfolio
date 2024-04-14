import "../styles/global.css";
import type { Metadata } from "next";
import { Providers } from "./provider";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import Contact from "@/components/Contact/contact";
export const metadata: Metadata = {
  title: "Sebco",
  description: "Sebco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#242424" }}>
      <body  style={{overflowX:'hidden'}}>
      
        <Providers>
        <Navbar/>
            {children}
          <Contact/>
        <Footer/>
        </Providers>
        
      </body>
    </html>
  );
}
