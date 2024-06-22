import { postData } from '@/backend/Services/firestore';
import { uploadImage } from '@/backend/Services/storage';
import { Titles } from '@/data/admintitle';
import { Button, Input, Modal, ModalContent } from '@nextui-org/react';
import React, { useState, useRef } from 'react';
import { GrAttachment } from 'react-icons/gr';

const ApplyJobModal = ({ id }: any) => {
  const [open, setOpenModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({ name: '', email: '', phone: '', resume: null });
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmittitng] = useState<boolean>(false);
  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittitng(true);
    if (!file) {
      alert('Please select a resume file.');
      setSubmittitng(false);
      return;
    }

    try {
      const current_time = new Date().getTime();
      const fileResponse = await uploadImage(file, `${Titles.Apply_for_job}/${formData.name}-${current_time}`);
      console.log('File Upload Response:', fileResponse);


      const updatedFormData = {
        ...formData,
        resume: fileResponse.data
      };

      setFormData(updatedFormData);

      console.log('Updated FormData:', updatedFormData);

      const response = await postData(Titles.Apply_for_job, updatedFormData);
      console.log('Form Data Response:', response);

      if (!response.status) {
        alert('Job Posting Failed!');
        setSubmittitng(false);
        closeModal();
        return;
      } else {
        alert('Job posted successfully!');
        setSubmittitng(false);
        setFormData({ name: '', email: '', phone: '', resume: null });
        setFile(null);
        closeModal();
      }
    } catch (error) {
      setSubmittitng(false);
      console.error('Error posting job:', error);
      alert('Failed to post job. Please try again.');
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
            <Input placeholder='Name' className='my-5 w-full' variant='underlined' name='name' onChange={handleInputChange} value={formData.name} required />
            <Input placeholder='E-mail' className='my-5 w-full' variant='underlined' name='email' onChange={handleInputChange} required value={formData.email} />
            <Input placeholder='Phone Number' className='my-5 w-full' variant='underlined' name='phone' onChange={handleInputChange} required value={formData.phone} />
            <div className='flex items-center my-5 w-full'>
              <input type='text' placeholder='Resume' className='flex-grow' disabled value={file ? file.name : ''} />
              <label htmlFor='file-input' className='cursor-pointer'>
                <GrAttachment />
                <input
                  type='file'
                  id='file-input'
                  name='resume'
                  className='hidden'
                  onChange={handleFileChange}
                  accept='application/pdf'
                  required
                />
              </label>
            </div>
            <Button type='submit' className='bg-[#FFBD12] py-1 px-3 rounded w-1/4 text-black my-8 h-10'>
              Submit
            </Button>
          </form>
        </ModalContent>
      </Modal >
    </>
  );
};

export default ApplyJobModal;
