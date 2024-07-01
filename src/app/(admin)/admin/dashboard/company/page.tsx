import PageComponent from "@/components/Admin/Pages/PageComponent";
import { Titles } from "@/data/admintitle";
import { adminColums } from "@/data/admin-table";

function Page() {
  const newColumns = [
    { name: "NAME", uid: "name", type: "text" },
    { name: "IMAGE", uid: "image", type: "image" },
    { name: "DESCRIPTION", uid: "description", type: "textbox" },
    { name: "ROLE", uid: "role", type: "text" },
    { name: "ACTIONS", uid: "actions", type: "actions" },
  ];
  const Title: any = "our-staff";
  return (
    <>
      <PageComponent Title={Title} columns={newColumns} />
      <PageComponent Title={Titles.CompletedProjects} columns={adminColums.completedProjects} />
    </>
  )
}

export default Page;
