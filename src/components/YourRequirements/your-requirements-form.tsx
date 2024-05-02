import { needsPreference, projectDetails } from '@/data/content-data';
import { Textarea } from '@nextui-org/react'
import React, { useState } from 'react'

const RequirementsForm = () => {
    const [formData, setFormData] = useState({});
const handleSubmit=(e:any)=>{
    e.preventDefault();
    console.log(formData);
  }
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className='flex justify-center items-center flex-col my-20'>
        <form onSubmit={handleSubmit} className='w-full'>
        <div className='text-[#FFBD12] text-3xl w-full flex justify-center items-center font-thin'><span className='font-medium pr-3'>Your Requirements:</span> Building Your Vision Together</div>
        <div className='w-full pt-6'>
            <div className=' text-[#FFBD12] text-xl w-full flex justify-start items-start font-medium mt-6'>Project Details:</div>
            {projectDetails.map((item, index) => (
            <Textarea
              key={index}
              variant="bordered"
              placeholder={item.placeholder}
              label={item.label}
              className='rounded-none py-5 text-white'
              minRows={5}
              id={item.id}
              name={item.id}
              onChange={handleInputChange}
              isRequired={true}
            />
          ))}
       <div className=' text-[#FFBD12] text-xl w-full flex justify-start items-start font-medium mt-6'>Your Needs and Preferences</div>
       {needsPreference.map((item, index) => (
            <Textarea
              key={index}
              variant="bordered"
              placeholder={item.placeholder}
              label={item.label}
              className='rounded-none py-5 text-white'
              minRows={5}
              id={item.id}
              name={item.id}
              onChange={handleInputChange}
              isRequired={true}
            />
          ))}
        </div>
    <div><button className='bg-[#FFBD12] rounded py-2 px-4 text-black' type='submit'>Submit</button></div>
    </form>
    </div>
  )
}

export default RequirementsForm