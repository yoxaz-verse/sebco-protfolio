"use client"
import CustomTable from '@/components/Admin/Custom-Table/Custom-Table'
import AddModal from '@/components/Admin/Testimonial/Add-Modal';
import { Spinner } from '@nextui-org/react';
import { useDisclosure } from '@nextui-org/react';
import React, { useState, useEffect } from 'react'
import ViewModal from '@/components/Admin/Testimonial/View-Modal';

const data: any[] = [
  // Your data array goes here
];



export function PageGetPostComponent(Title: any) {
  const [randomId, setRandomId] = React.useState<string>(Math.random().toString(36).substring(7));
  const { isOpen: isOpenContent, onOpen: onOpenContent, onOpenChange: onOpenChangeContent } = useDisclosure();
  const [currdata, setcurrData] = useState<any>(null);
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onOpenChange: onOpenChangeDelete } = useDisclosure();
  const { isOpen: isOpenView, onOpen: onOpenView, onOpenChange: onOpenChangeView, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(currdata);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [randomId]);

  const handleOnOpenEdit = (data: any) => {
    setcurrData(data);
    onOpenContent();
  }

  const handleOnOpenDelete = (data: any) => {
    setcurrData(data);
    onOpenDelete();
  }

  const handleOnOpenView = (data: any) => {
    setcurrData(data);
    onOpenView();
  }
  const generateRandomId = () => {
    setRandomId(Math.random().toString(36).substring(7));
  };

  const [newCols, setNewCols] = useState<any>([]);

  useEffect(() => {
    if (Title.columns && Title.columns.length > 0) {
      const updatedCols = Title.columns.map((c: any) => ({
        name: c.name,
        type: c.type
      }));
      setNewCols(updatedCols);
    }
  }, [Title.columns]);

  return (
    <div>
      <div className='w-full flex p-[1rem] justify-between'>
        <h2 className='text-2xl font-bold'>{`${Title.Title.charAt(0).toUpperCase() + Title.Title.slice(1)}s`}</h2>
        <AddModal columns={newCols} generateRandomId={generateRandomId} title={Title.Title} />
      </div>
      {loading ? (
        <>
          <div className='flex flex-col h-[100vh] items-center'>
            <Spinner color='primary' />
            <h1>Loading...</h1>
          </div>
        </>
      ) : (
        <CustomTable id={randomId} generateRandomId={generateRandomId} title={Title.Title} data={data} onOpenView={handleOnOpenView} onOpenDelete={handleOnOpenDelete} onOpenEdit={handleOnOpenEdit} columns={Title.columns} />
      )}
      <ViewModal large columns={newCols} title={Title.Title} data={currdata} onOpenChange={onOpenChangeView} isOpen={isOpenView} onClose={onClose} />
    </div>
  );
}

export default PageGetPostComponent;
