"use client"

import BlogDetailComponent from "@/components/Blog/blog-detail-component";
import BlogPageHero from "@/components/Blog/blog-hero";
import CommentComponent from "@/components/Blog/comment-component";
import RecentPostComponent from "@/components/Blog/recent-post-component";
import HomePageHero from "@/components/Home/homepage-hero";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function BlogPage() {

  return (
    <div className={`${inter.className}`}>
      <BlogPageHero />
      <div className="flex p-4 justify-center w-full items-center flex-col">
        <BlogDetailComponent />
        <RecentPostComponent />
        <CommentComponent />
      </div>
    </div>
  );
}
