import { OurServicesModalProps } from '@/data/interface-data';
import { Button, Modal, ModalContent } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'

const OurServicesModal = ({data}:OurServicesModalProps) => {
const [open,setOpenModal] = useState(false);
function openModal(){
    setOpenModal(true);
}
function closeModal(){
    setOpenModal(false);
}
return (
    <>
    <Button onClick={openModal}>Open</Button>
    <Modal isOpen={open} onClose={closeModal} className='bg-[#242424] text-white' size='lg'>
            <ModalContent className='flex justify-center items-center px-20 pt-10'>
            <div className='flex w-full justify-start text-xl font-medium'>{data.title}</div>
                    <div>{data.description}</div>
                    <Image src={data.image} alt="Our Services" width={600} height={300} className='pt-2'/>
                    <button color='warning' className='bg-#FFBD12 py-2 px-3 bg-[#FFBD12] rounded w-1/2 text-black my-10'>Get a Free Quote</button>
            </ModalContent>
    </Modal>
    </>
)
}

export default OurServicesModal