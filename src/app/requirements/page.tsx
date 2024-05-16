"use client"

import QuoteComponent from "@/components/QuoteComponent.tsx/quote-component";
import RequirementsForm from "@/components/YourRequirements/your-requirements-form";

export default function RequirementsPage() {
  
    return (
        <div className="flex justify-center items-center flex-col">
        <div className="w-[80%]"><RequirementsForm/></div>
        <div className="w-[60%] my-20"><QuoteComponent text={'Want to get started? Contact us today for a free consultation!'}/></div>
        </div>
    );
}
