"use client"
import React from 'react';
import { PageComponent } from '@/components/Admin/Pages/PageComponent';
import PageGetPostDeleteComponent from '@/components/Admin/Pages/PageGetPostDelete';
import { adminColums } from '@/data/admin-table';
import { Titles } from '@/data/admintitle';
import PageGetPostComponent from '@/components/Admin/Pages/PageGetPost';



function Page() {
  return (
    <>
      <div className='flex flex-col gap-[2vh]'>
        <PageComponent Title={Titles.Testimonial} columns={adminColums.newColumns} />
        <PageComponent Title={Titles.Blogs} columns={adminColums.blogColumns} />
        <PageComponent Title={Titles.Service} columns={adminColums.serviceColumns} />
        <PageGetPostDeleteComponent Title={Titles.Location} columns={adminColums.locationColumns} />
        <PageComponent Title={Titles.LatestNew} columns={adminColums.latestNewsColumns} />
        <PageComponent Title={Titles.Contact} columns={adminColums.contactColumns} />
        <PageGetPostComponent Title={Titles.Comments} columns={adminColums.commentColums} />
        <PageComponent Title={Titles.Jobs} columns={adminColums.jobsColums} />
        <PageComponent Title={Titles.Project} columns={adminColums.projectColumns} />
        <PageComponent Title={Titles.Requiremnt} columns={adminColums.requiremnetColums} />
        <PageComponent Title={Titles.CompletedProjects} columns={adminColums.completedProjects} />
      </div>
    </>
  );
}

export default Page;
