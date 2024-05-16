"use client"

import BlogDetailComponent from "@/components/Blog/blog-detail-component";
import BlogPageHero from "@/components/Blog/blog-hero";
import CommentComponent from "@/components/Blog/comment-component";
import RecentPostComponent from "@/components/Blog/recent-post-component";
import HomePageHero from "@/components/Home/homepage-hero";

export default function BlogPage() {
  
    return (
        <div>
       <BlogPageHero/>
       <div className="flex justify-center w-full items-center flex-col">
       <BlogDetailComponent/>
       <RecentPostComponent/>
       <CommentComponent/>
       </div>
      </div>
    );
}
