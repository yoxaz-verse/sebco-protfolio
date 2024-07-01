"use client"
import { NewsDetailComponentById } from "@/components/Blog/blog-detail-component";
import { RecentNewsComponentByIdFilter } from "@/components/Blog/recent-post-component";
import { Titles } from "@/data/admintitle";
import { useFetchDataById } from "@/hooks/useFetchData";
import { Spinner } from "@nextui-org/react";
import { NextPage } from "next";
import { Inter } from 'next/font/google'
import { useParams } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

const NewsPageById: NextPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetchDataById(Titles.LatestNew, id);

  if (loading) {
    return (<>
      <Spinner color="warning" content="Loading News.." />
    </>);
  }
  if (!loading) {
    console.log(id, data.image);
    return (
      <div className={`${inter.className}`}>
        <div className="flex p-4 justify-center w-full items-center flex-col">
          <NewsDetailComponentById data={data} />
          <RecentNewsComponentByIdFilter id={id} />
          {/*  <CommentComponent /> */}
        </div>
      </div>
    );
  }
}
export default NewsPageById;
