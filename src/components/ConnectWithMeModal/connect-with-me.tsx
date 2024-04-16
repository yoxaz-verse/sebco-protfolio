
import { ConnectWithMeProps } from '@/data/interface-data';
import { Avatar, Button, Input, Modal, ModalContent, Textarea } from '@nextui-org/react'
import React, { useState, useRef } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';

const ConnectWithMeModal = ({data}:ConnectWithMeProps) => {
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
  const redirect = (url:string) => {
       window.open(url, '_blank');
  }
  return (
    <>
      <Button onClick={openModal}>Open</Button>
      <Modal isOpen={open} onClose={closeModal} className='bg-[#2B2B2B] text-white' size='lg'>
        <ModalContent className='flex justify-center items-center px-5 pt-8 w-full'>
          <form onSubmit={handleSubmit} className='w-10/12'>
            <div className='flex w-full items-start justify-items-start py-3'>
            <Avatar src={data.img} size='lg'/>
            <div className='flex flex-col px-2'>
            <div className='font-medium font-base'>{data.name}</div>
            <div className='font-base'>{data.designation}</div>
            </div>
            </div>
            <div className='pt-6 text-sm'>E-mail address - {data.email}</div>
            <div className='text-sm'>Phone number - {data.phone}</div>
            <Textarea placeholder='Send Message' name='message' onChange={handleInputChange} id='message' variant='bordered' className='w-full my-2 border-none mt-5' minRows={8} isRequired={true}/>
            <div className='w-full flex items-end justify-end'><button className='bg-#FFBD12 py-1 px-3 bg-white rounded w-1/4 text-black my-2 h-10'>Send</button></div>
            <div className='pt-1 text-sm pb-2'>Follow me on</div>
            <div className='flex w-full pb-10'>
            <div className='h-5 w-5 rounded-full bg-white mr-2 flex items-center justify-center p-1'><BsFacebook className='text-black text-lg' onClick={()=>redirect(data.facebook)}/></div>
               <div className='h-5 w-5 rounded-full bg-white mr-2 flex items-center justify-center p-1'><RiInstagramFill className='text-black text-lg' onClick={()=>redirect(data.instagram)}/></div>
               <div className='h-5 w-5 rounded-full bg-white flex items-center justify-center p-1'><ImTwitter className='text-black text-lg' onClick={()=>redirect(data.twitter)}/></div>
              </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConnectWithMeModal;
