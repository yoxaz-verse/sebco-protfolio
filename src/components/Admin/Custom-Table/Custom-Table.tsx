import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, Modal, ModalContent, ModalHeader, TableRow, TableCell, User, Chip, Tooltip, ChipProps, Pagination, Textarea, Link, Button } from "@nextui-org/react";
import { getData } from "@/backend/Services/firestore";
import Image from "next/image";
import { EyeIcon } from "../Icons/EyeIcon";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { projectDetails } from "@/data/content-data";


const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface CustomTableProps {
  title: string;
  data: any;
  columns: any;
  id: any;
  generateRandomId: () => void;
  onOpenEdit: (data: any) => any;
  onOpenDelete: (data: any) => any;
  onOpenView: (data: any) => any;
}
export default function CustomTable({ title, data, columns, onOpenEdit, onOpenView, onOpenDelete, id }: CustomTableProps) {
  const [table_data, setTableData] = React.useState(data);
  console.log(table_data);
  const renderCell = React.useCallback((data: any, columnKey: React.Key) => {
    console.log(data.images);
    const cellValue = data[columnKey as keyof any];
    console.log(columnKey);
    console.log(cellValue);
    const post_code = data["postal code"];
    console.log(post_code);


    switch (columnKey) {
      case "name":
        return (
          <h3>{data.name}</h3>
        );
      case "heading":
        return (
          <h3>{data.heading}</h3>
        );
      case 'youtubeLink':
        return (
          <Link href={data.youtubeLink} target="_blank" underline={"hover"}>
            {data.youtubeLink}
          </Link>
        );
      case "image":
        return (
          <Image src={data.image} alt={data.name} width={50} height={50} />
        );
      case "images":
        return (
          <Image src={data.images[0].data} alt={data.images[0].status} width={50} height={50} />
        );
      case "description":
        return (
          <Textarea
            isReadOnly
            defaultValue={data.description}
            className="max-w-xs"
          />
        );
      case "postal code":
        return post_code;
      case "project_details":
        return (
          <div className="flex flex-col">
            {data.projectDetails.map((p: any, index: number) => (
              <Chip color="primary" key={index}>{p}</Chip>
            ))}
          </div>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{data.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[data.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "action":
        return (
          <>
            <div className="relative flex items-center gap-2">
              <Button isIconOnly className="bg-transparent"
                onClick={() => {
                  onOpenView(data);
                }}>  <EyeIcon /></Button>
              <Button isIconOnly className="bg-transparent"
                onClick={() => {
                  onOpenDelete(data);
                }}>    <DeleteIcon className="fill-red-400" /></Button>
            </div>
          </>
        );
      case "action3":
        return (
          <>
            <div className="relative flex items-center gap-2">
              <Button isIconOnly className="bg-transparent"
                onClick={() => {
                  onOpenDelete(data);
                }}>    <DeleteIcon className="fill-red-400" /></Button>
            </div>
          </>
        );
      case "action2":
        return (
          <>
            <div className="relative flex items-center gap-2">
              <Button isIconOnly className="bg-transparent"
                onClick={() => {
                  onOpenView(data);
                }}>  <EyeIcon /></Button>
            </div>
          </>
        );

      case "actions":
        return (
          <>
            <div className="relative flex items-center gap-2">
              <Button isIconOnly className="bg-transparent"
                onClick={() => {
                  onOpenView(data);
                }}>  <EyeIcon /></Button>
              <Button isIconOnly className="bg-transparent"
                onClick={() => {
                  onOpenEdit(data);
                }}>  <EditIcon /></Button>
              <Button isIconOnly className="bg-transparent"
                onClick={() => {
                  onOpenDelete(data);
                }}>    <DeleteIcon className="fill-red-400" /></Button>
            </div>
          </>
        );
      case "service_dropdown":
        return data.services_provided;
      default:
        return cellValue;
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const resp = await getData(title);
      if (resp.status) {
        setTableData(resp.data);
      }
    }
    fetchData();

  }, [title, id]);


  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(table_data.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return table_data.slice(start, end);
  }, [page, table_data]);
  return (
    <Table aria-label="Example table with custom cells"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }>
      <TableHeader columns={columns}>
        {(column: any) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item: any) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}