import { postData } from '@/backend/Services/firestore';
import { Titles } from '@/data/admintitle';
import { needsPreference, projectDetails } from '@/data/content-data';
import { Textarea, Button } from '@nextui-org/react'
import React, { useState } from 'react'

const RequirementsForm = () => {
  const [formData, setFormData] = useState<any>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    console.log(formData);
    const data = {
      name: formData.name,
      email: formData.email,
      location_and_district: formData.location_and_district,
      phone: formData.phone,
      budget: formData.budget,
      square_feet: formData.square_feet,
      requirements: formData.reuqirements,
    }
    console.log(data);
    const response = await postData(Titles.Requiremnt, data);
    if (response.status) {
      console.log(response.data);
      alert(response.data);
      alert(response.status);
    }
    setSubmitting(false);
    setFormData({});
  }
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className='flex justify-center w-full items-center flex-col'>
      <form onSubmit={handleSubmit} className='w-full py-20'>
        <h1 className='text-[#FFBD12] text-3xl w-full flex justify-center items-center font-thin'>
          <span className='text-3xl font-bold pr-3'>
            Your Requirements:</span> Building Your Vision Together</h1>
        <div className='w-full pt-6'>
          <div className='text-[#FFBD12] text-xl w-full flex justify-start items-start font-medium pt-6'>
            Your Details:
          </div>
          {projectDetails.map((item, index) => (
            <Textarea
              key={index}
              variant="bordered"
              placeholder={item.placeholder}
              label={item.label}
              style={{ borderRadius: "0px" }}
              className='py-5 text-white'
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
              style={{ borderRadius: "0px" }}
              className='py-5 text-white'
              minRows={5}
              id={item.id}
              name={item.id}
              onChange={handleInputChange}
              isRequired={true}
            />
          ))}
        </div>
        <Button isLoading={submitting} className='bg-[#FFBD12] rounded py-2 px-4 text-black' type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default RequirementsForm
