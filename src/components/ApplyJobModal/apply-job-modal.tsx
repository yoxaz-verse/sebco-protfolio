import { postData } from '@/backend/Services/firestore';
import { Titles } from '@/data/admintitle';
import { Button, Input, Modal, ModalContent } from '@nextui-org/react';
import React, { useState, useRef } from 'react';
import { GrAttachment } from 'react-icons/gr';

const ApplyJobModal = ({ id }: any) => {
  const [open, setOpenModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileInputRef.current || !fileInputRef.current.files || fileInputRef.current.files.length === 0) {
      alert('Please select a resume file.');
      return;
    }
    const file = fileInputRef.current.files[0];
    const data = new FormData();
    data.append('JOBID', id);
    data.append('NAME', formData.name);
    data.append('EAMIL', formData.email);
    data.append('PHONE', formData.phone);
    data.append('RESUME', file);
    const response = await postData(Titles.Apply_for_job, data);
    if (!response.status) {
      alert('Job Posting Failed!');
    } else {
      alert('Job posted');
      setFormData({});
      closeModal();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Button onClick={openModal} color='warning'>
        Apply Here
      </Button>
      <Modal isOpen={open} onClose={closeModal} className='bg-[#242424] text-white' size='lg'>
        <ModalContent className='flex justify-center items-center px-5 pt-5 w-full'>
          <form onSubmit={handleSubmit} className='w-10/12'>
            <div className='text-[#FFBD12] text-2xl py-5 w-full font-medium'>Apply Now</div>
            <h1>Job Id {id}</h1>
            <Input placeholder='Name' className='my-5 w-full' variant='underlined' name='name' onChange={handleInputChange} required />
            <Input placeholder='E-mail' className='my-5 w-full' variant='underlined' name='email' onChange={handleInputChange} required />
            <Input placeholder='Phone Number' className='my-5 w-full' variant='underlined' name='phone' onChange={handleInputChange} required />
            <div className='flex items-center my-5 w-full'>
              <input type='text' placeholder='Resume' className='flex-grow' disabled />
              <label htmlFor='file-input' className='cursor-pointer'>
                <GrAttachment />
                <input type='file' id='file-input' className='hidden' ref={fileInputRef} accept='application/pdf' required />
              </label>
            </div>
            <button type='submit' className='bg-#FFBD12 py-1 px-3 bg-[#FFBD12] rounded w-1/4 text-black my-8 h-10 mb-10'>
              Submit
            </button>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ApplyJobModal;
