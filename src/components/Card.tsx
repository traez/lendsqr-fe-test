"use client";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";
import { LuArrowDownWideNarrow } from "react-icons/lu";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { DataTypeUserInfo, arrayCard } from "@/lib/dataUserInfo";

const columnHelper = createColumnHelper<DataTypeUserInfo>();

const columns = [
  columnHelper.accessor("ORGANIZATION", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="table-header">
        ORGANIZATION
        <LuArrowDownWideNarrow className="icon" size="16px" />
      </span>
    ),
  }),
  columnHelper.accessor("USERNAME", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="table-header">
        USERNAME
        <LuArrowDownWideNarrow className="icon" size="16px" />
      </span>
    ),
  }),
  columnHelper.accessor("EMAIL", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="table-header">
        EMAIL
        <LuArrowDownWideNarrow className="icon" size="16px" />
      </span>
    ),
  }),
  columnHelper.accessor("PHONE NUMBER", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="table-header">
        PHONE NUMBER
        <LuArrowDownWideNarrow className="icon" size="16px" />
      </span>
    ),
  }),
  columnHelper.accessor("DATE JOINED", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="table-header">
        DATE JOINED
        <LuArrowDownWideNarrow className="icon" size="16px" />
      </span>
    ),
  }),
  columnHelper.accessor("STATUS", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="table-header">
        STATUS
        <LuArrowDownWideNarrow className="icon" size="16px" />
      </span>
    ),
  }),
];

export default function Card() {
  const [data] = useState(() => [...arrayCard]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <section className="card">
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <div className="items-per-page">
          <span>Items per page</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="pagination-buttons">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <FaAnglesLeft size="20px" />
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <GoChevronLeft size="20px" />
          </button>
          <span>
            <input
              type="number"
              value={table.getState().pagination.pageIndex + 1}
              min={1}
              max={table.getPageCount()}
              onChange={(e) => table.setPageIndex(Number(e.target.value) - 1)}
            />
            of {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <GoChevronRight size="20px" />
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <FaAnglesRight size="20px" />
          </button>
        </div>
      </div>
    </section>
  );
}
