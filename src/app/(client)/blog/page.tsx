"use client"

import BlogDetailComponent from "@/components/Blog/blog-detail-component";
import BlogPageHero from "@/components/Blog/blog-hero";
import HomePageHero from "@/components/Home/homepage-hero";

export default function BlogPage() {
  
    return (
        <div>
       <BlogPageHero/>
       <div className="flex justify-center w-full items-center">
       <BlogDetailComponent/>
       </div>
      </div>
    );
}
