"use client"

import QuoteComponent from "@/components/QuoteComponent.tsx/quote-component";
import Animate from "@/components/ReUseComponents/Animate";
import RequirementsForm from "@/components/YourRequirements/your-requirements-form";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RequirementsPage() {
  return (
    <Animate className={`flex ${inter.className} justify-center items-center flex-col px-[10vw]`} >
      <RequirementsForm />
      <div className="w-full p-4">
        <QuoteComponent text={'Want to get started? Contact us today for a free consultation!'} /></div>
    </Animate >
  );
}
