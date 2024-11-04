"use client";
import { useState, CSSProperties } from "react";
import Image from "next/image";
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

const getStatusStyle = (status: string): CSSProperties => {
  switch (status) {
    case "Inactive":
      return {
        color: "#545F7D",
        backgroundColor: "#e1e2e3",
        padding: "2px",
        borderRadius: "2px",
      };
    case "Pending":
      return {
        color: "#bd9103",
        backgroundColor: "#f9edc6",
        padding: "2px",
      };
    case "Blacklisted":
      return {
        color: "#E4033B",
        backgroundColor: "#f8d7df",
        padding: "2px",
      };
    case "Active":
      return {
        color: "#1a9c3f",
        backgroundColor: "#c6f0d2",
        padding: "2px",
      };
    default:
      return {};
  }
};

const PopupContent = ({ words, urls }: { words: string[]; urls: string[] }) => {
  const pairedData = words.map((word, index) => ({ word, url: urls[index] }));

  return (
    <div className="popup-content">
      {pairedData.map((item, index) => (
        <span key={index}>
          <div className="popup-icon-container">
            <Image
              src={`/icon-popup-${item.url}.svg`}
              alt="popup-icon"
              fill
              sizes="(min-width: 400px) 100vw"
              className="popup-icon"
            />
          </div>
          <p>{item.word}</p>
        </span>
      ))}
    </div>
  );
};

const LCellContent = ({ value }: { value: string }) => {
  const [showPopup, setShowPopup] = useState(false);
  const words = ["View Details", "Blacklist User", "Activate User"];
  const urls = ["view", "blacklist", "activate"];

  return (
    <div className="l-cell">
      <span onClick={() => setShowPopup(!showPopup)} className="l-cell-content">
        {value}
      </span>
      {showPopup && (
        <div className="popup">
          <PopupContent words={words} urls={urls} />
        </div>
      )}
    </div>
  );
};

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
    cell: (info) => (
      <div style={getStatusStyle(info.getValue())}>{info.getValue()}</div>
    ),
    header: () => (
      <span className="table-header">
        STATUS
        <LuArrowDownWideNarrow className="icon" size="16px" />
      </span>
    ),
  }),

  columnHelper.accessor("L", {
    cell: (info) => <LCellContent value={info.getValue()} />,
    header: () => <span className="table-header">L</span>,
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
            {[5, 10, 15].map((pageSize) => (
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
