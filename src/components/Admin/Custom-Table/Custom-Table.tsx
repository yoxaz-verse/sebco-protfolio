"use client";
import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, Pagination, Textarea, Link } from "@nextui-org/react";
import { getData } from "@/backend/Services/firestore";
import Image from "next/image";
import { EyeIcon } from "../Icons/EyeIcon";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";


const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface CustomTableProps {
  title: string;
  data: any;
  columns: any;
}
export default function CustomTable({ title, data, columns }: CustomTableProps) {
  const [table_data, setTableData] = React.useState(data);
  const renderCell = React.useCallback((data: any, columnKey: React.Key) => {
    const cellValue = data[columnKey as keyof any];

    switch (columnKey) {
      case "name":
        return (
          <h3>{data.name}</h3>
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
      case "description":
        return (
          <Textarea
            isReadOnly
            variant="bordered"
            defaultValue={data.description}
            className="max-w-xs"
          />

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
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
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
  }, [title]);


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
