"use client"
import React from 'react';
import { PageComponent } from '@/components/Admin/Pages/PageComponent';
import { adminColums } from '@/data/admin-table';
import { Titles } from '@/data/admintitle';

function Page() {
  return (
    <>
      <div className='flex flex-col gap-[2vh]'>
        <PageComponent Title={Titles.Requiremnt} columns={adminColums.requiremnetColums} />
        <PageComponent Title={Titles.Contact} columns={adminColums.contactColumns} />
      </div>
    </>
  );
}

export default Page;
