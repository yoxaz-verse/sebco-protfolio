"use client"
import React from 'react';
import { PageComponent } from '@/components/Admin/Pages/PageComponent';
import PageGetPostDeleteComponent from '@/components/Admin/Pages/PageGetPostDelete';
import { adminColums } from '@/data/admin-table';
import { Titles } from '@/data/admintitle';
import PageGetPostComponent from '@/components/Admin/Pages/PageGetPost';
import PageGetDeleteComponent from '@/components/Pages/PageGetDelete';



function Page() {
  return (
    <>
      <div className='flex flex-col gap-[2vh]'>

        <PageComponent Title={Titles.LatestNew} columns={adminColums.latestNewsColumns} />
        <PageComponent Title={Titles.Requiremnt} columns={adminColums.requiremnetColums} />
        <PageComponent Title={Titles.CompletedProjects} columns={adminColums.completedProjects} />
      </div>
    </>
  );
}

export default Page;
