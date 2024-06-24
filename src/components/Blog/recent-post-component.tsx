import React from 'react';
import { LatestNewsPostCard, RecentPostCard } from './recent-post-card';
import { useFetchData } from '@/hooks/useFetchData';
import { Titles } from '@/data/admintitle';
import { Spinner } from '@nextui-org/react';


const RecentNewsComponent = () => {
  const { data, loading } = useFetchData(Titles.LatestNew);

  if (loading) {
    return (
      <div className='h-1/4 w-1/4 flex flex-col items-center justify-center'>
        <Spinner color='warning' />
        <h1>Loading..</h1>
      </div>
    );
  } else {
    const posts = Object.values(data) || [];
    return (
      <div className='py-20'>
        <div className='text-white text-2xl flex justify-start items-start w-[81%] py-4'>Recent Posts</div>
        <div className='grid grid-rows-3 grid-cols-3 gap-4'>
          {posts.map((post: any) => (
            <LatestNewsPostCard data={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
};

const RecentNewsComponentByIdFilter = ({ id }: { id: any }) => {
  const { data, loading } = useFetchData(Titles.LatestNew);

  if (loading) {
    return (
      <div className='h-1/4 w-1/4 flex flex-col items-center justify-center'>
        <Spinner color='warning' />
        <h1>Loading..</h1>
      </div>
    );
  } else {

    const posts = Object.values(data) || [];

    return (
      <div className='py-20'>
        <div className='text-white text-2xl flex justify-start items-start w-[81%] py-4'>Recent Posts</div>
        <div className='flex gap-4'>
          {posts.filter((post: any) => post.id !== id).slice(0, 3).map((post: any) => (
            <LatestNewsPostCard data={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
};





const RecentPostComponent = () => {
  const { data, loading } = useFetchData(Titles.Blogs);

  if (loading) {
    return (
      <div className='h-1/4 w-1/4 flex flex-col items-center justify-center'>
        <Spinner color='warning' />
        <h1>Loading..</h1>
      </div>
    );
  } else {
    const posts = Object.values(data) || [];
    return (
      <div className='py-20'>
        <div className='text-white text-2xl flex justify-start items-start w-[81%] py-4'>Recent Posts</div>
        <div className='flex gap-4'>
          {posts.slice(0, 3).map((post: any) => (
            <RecentPostCard data={{ ...post, description: post.description }} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
};

const RecentPostComponentByIdFilter = ({ id }: { id: any }) => {
  const { data, loading } = useFetchData(Titles.Blogs);

  if (loading) {
    return (
      <div className='h-1/4 w-1/4 flex flex-col items-center justify-center'>
        <Spinner color='warning' />
        <h1>Loading..</h1>
      </div>
    );
  } else {

    const posts = Object.values(data) || [];

    return (
      <div className='py-20'>
        <div className='text-white text-2xl flex justify-start items-start w-[81%] py-4'>Recent Posts</div>
        <div className='flex gap-4'>
          {posts.filter((post: any) => post.id !== id).slice(0, 3).map((post: any) => (
            <RecentPostCard data={{ ...post, description: post.description }} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
};

export { RecentPostComponent, RecentPostComponentByIdFilter, RecentNewsComponent, RecentNewsComponentByIdFilter };
