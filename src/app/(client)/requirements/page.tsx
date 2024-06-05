"use client"

import QuoteComponent from "@/components/QuoteComponent.tsx/quote-component";
import RequirementsForm from "@/components/YourRequirements/your-requirements-form";
<<<<<<< HEAD
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
=======

export default function RequirementsPage() {
  
    return (
        <div className="flex justify-center items-center flex-col">
        <div className="w-[80%]"><RequirementsForm/></div>
        <div className="w-[60%] my-20"><QuoteComponent text={'Want to get started? Contact us today for a free consultation!'}/></div>
        </div>
    );
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
}
