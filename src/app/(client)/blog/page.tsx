"use client"
import { BlogDetailComponent } from "@/components/Blog/blog-detail-component";
import BlogPageHero from "@/components/Blog/blog-hero";
import { RecentPostComponent } from "@/components/Blog/recent-post-component";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function BlogPage() {

  return (
    <div className={`${inter.className}`}>
      <BlogPageHero />
      <div className="w-20 h-20 rounded-full bg-yellow-400 blur absolute" />
      <div className="flex p-4 justify-center w-full items-center flex-col">
        <BlogDetailComponent />
        <RecentPostComponent />
        {/*  <CommentComponent /> */}
      </div>
    </div>
  );
}
