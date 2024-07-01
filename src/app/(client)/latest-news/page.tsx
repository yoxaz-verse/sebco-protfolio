"use client"
import { RecentNewsComponent, RecentPostComponent } from "@/components/Blog/recent-post-component";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function BlogPage() {

  return (
    <div className={`${inter.className} p-3`}>
      <h1>Latest News</h1>
      <RecentNewsComponent />
    </div>
  );
}
