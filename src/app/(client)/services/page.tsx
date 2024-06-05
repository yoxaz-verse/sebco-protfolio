"use client"

import ServiceComponent from "@/components/Services/service-component";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function ServicePage() {
  return (
    <div className={inter.className}>
      <ServiceComponent />
    </div>
  );
}
