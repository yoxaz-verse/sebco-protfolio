import "../../styles/global.css";
import type { Metadata } from "next";
import { Providers } from "./provider";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import Contact from "@/components/Contact/contact";
import { Poppins } from "next/font/google";
import OurCompletedProjects from "@/components/Home/our-completed-projects";

export const metadata: Metadata = {
  title: "Sebco",
  description: "Sebco",
};
const roboto = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ backgroundColor: "#242424" }}
      className={roboto.className}
    >
      <body style={{ overflowX: "hidden" }}>
        <Providers>
          <Navbar />
          {children}
          <Contact />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
