import "../../styles/global.css";
import type { Metadata } from "next";
import { Providers } from "./provider";
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
    <html lang="en">
      <body style={{ overflowX: 'hidden' }}>

        <Providers>
          {/* <AdminNavbar /> */}
          {/* <div className="mx-[12%] mt-2 "> */}
          {children}
          {/* </div> */}
        </Providers>

      </body>
    </html>
  );
}
