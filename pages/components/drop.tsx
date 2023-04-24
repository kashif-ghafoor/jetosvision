import React from "react";
import { FaFileUpload } from "react-icons/fa";
// Drag and drop component

interface DragAndDropProps {
  dragging: boolean;
  handleDragOver: (e: React.DragEvent<HTMLElement>) => void;
  handleDragLeave: (e: React.DragEvent<HTMLElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DragAndDrop(props: DragAndDropProps) {
  const { dragging, handleDragLeave, handleDragOver, handleDrop, onFileChange } = props;
  const boxShadow = dragging
    ? "0px 0px 40px 12px rgba(70, 27, 194, 0.5)"
    : "0px 0px 50px 3px rgba(70, 27, 194, 0.5)";
  return (
    <section
      className="h-80 mt-12 border-0 flex flex-col items-center justify-center shadow-xl gap-4"
      style={{
        borderRadius: 64,
        boxShadow: boxShadow,
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <FaFileUpload className="h-10 w-10 text-gray-500" />
      <label htmlFor="file-upload" className="custom-file-upload text-white cursor-pointer">
        Choose/Drop PDF files
      </label>
      <input
        id="file-upload"
        type="file"
        multiple
        onChange={onFileChange}
        style={{ display: "none" }}
      />
    </section>
  );
}
