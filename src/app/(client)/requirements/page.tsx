"use client"

import QuoteComponent from "@/components/QuoteComponent.tsx/quote-component";
import RequirementsForm from "@/components/YourRequirements/your-requirements-form";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RequirementsPage() {
  return (
    <div className={`flex ${inter.className} justify-center items-center flex-col px-[10vw]`} >
      <RequirementsForm />
      <div className="w-full p-4">
        <QuoteComponent text={'Want to get started? Contact us today for a free consultation!'} /></div>
    </div >
  );
}
