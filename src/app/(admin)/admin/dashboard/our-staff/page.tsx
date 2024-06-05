import PageComponent from "@/components/Admin/Pages/PageComponent";

function Page() {
  const newColumns = [
    { name: "NAME", uid: "name", type: "text" },
    { name: "IMAGE", uid: "image", type: "image" },
    { name: "DESCRIPTION", uid: "description", type: "textbox" },
    { name: "ROLE", uid: "role", type: "text" },
    { name: "ACTIONS", uid: "actions", type: "textbox" },
  ];
  const Title: any = "our-staff";
  return <PageComponent Title={Title} columns={newColumns} />
}

export default Page;
