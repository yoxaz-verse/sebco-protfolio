import { Button, Input, Modal, ModalContent } from '@nextui-org/react'
import React, { useState, useRef } from 'react'
import { GrAttachment } from "react-icons/gr";

const ApplyJobModal = () => {
  const [open, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const fileInputRef = useRef(null);
  const openModal = () => {
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false);
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
  }
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <Button onClick={openModal}>Open</Button>
      <Modal isOpen={open} onClose={closeModal} className='bg-[#242424] text-white' size='lg'>
        <ModalContent className='flex justify-center items-center px-5 pt-5 w-full'>
          <form onSubmit={handleSubmit} className='w-10/12'>
            <div className='text-[#FFBD12] text-2xl py-5 w-full font-medium'>Apply Now</div>
            <Input placeholder='Name' className='my-5 w-full' variant='underlined' id='name' onChange={handleInputChange} isRequired={true}/>
            <Input placeholder='E-mail' className='my-5 w-full' variant='underlined' id='email' onChange={handleInputChange} isRequired={true}/>
            <Input placeholder='Phone Number' className='my-5 w-full' variant='underlined' id='number' onChange={handleInputChange} isRequired={true}/>
            <div className="flex items-center my-5 w-full">
              <Input placeholder='Resume' className='flex-grow' variant='underlined' id='resume' disabled />
              <label htmlFor="#file-input"><GrAttachment className="cursor-pointer"/></label>
              <input type='file' className='hidden' id='#file-input' ref={fileInputRef} onChange={handleInputChange} required/>
            </div>
            <button className='bg-#FFBD12 py-1 px-3 bg-[#FFBD12] rounded w-1/4 text-black my-8 h-10 mb-10'>Submit</button>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ApplyJobModal;
