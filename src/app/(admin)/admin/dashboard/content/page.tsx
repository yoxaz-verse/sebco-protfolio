import CustomTable from '@/components/Admin/Custom-Table/Custom-Table'
import AddModal from '@/components/Admin/Testimonial/Add-Modal';
import React from 'react'
const columns = [
  { name: "NAME", uid: "name", type: "text" },
  { name: "ROLE", uid: "role", type: "text" },
  { name: "STATUS", uid: "status", type: "number" },
  { name: "ACTIONS", uid: "actions", type: "textbox" },
];

const newColumns = [
  { name: "NAME", uid: "name", type: "text" },
  { name: "IMAGE", uid: "image", type: "image" },
  { name: "YOUTUBE-LINK", uid: "youtubeLink", type: "text" },
  { name: "ACTIONS", uid: "actions", type: "textbox" },
];

const data = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];
const Title = 'Testimonial'



function Content() {
  return (
    <div>
      <div className='w-full flex justify-between my-2'>
        <h2 className='text-2xl font-bold'>{`${Title}s`}</h2>
        <AddModal title={Title} />
      </div>
      <CustomTable title={Title} data={data} columns={newColumns} />
    </div>
  )
}

export default Content