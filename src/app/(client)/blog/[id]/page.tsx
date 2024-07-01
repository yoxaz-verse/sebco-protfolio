"use client"
import { BlogDetailComponentById } from "@/components/Blog/blog-detail-component";
import { RecentPostComponentByIdFilter } from "@/components/Blog/recent-post-component";
import { Titles } from "@/data/admintitle";
import { useFetchDataById } from "@/hooks/useFetchData";
import { NextPage } from "next";
import { Inter } from 'next/font/google'
import { useParams } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

const BlogsPageById: NextPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetchDataById(Titles.Blogs, id);

  if (loading) {
    return (<></>);
  }
  if (!loading) {
    console.log(id, data.image);
    return (
      <div className={`${inter.className}`}>
        <div className="flex p-4 justify-center w-full items-center flex-col">
          <BlogDetailComponentById data={data} />
          <RecentPostComponentByIdFilter id={id} />
          {/*  <CommentComponent /> */}
        </div>
      </div>
    );
  }
}
export default BlogsPageById;
