import React from "react";
import DragAndDrop from "./drop";
import FilePreview from "./File";

export default function MainContent() {
  const [dragging, setDragging] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    setFiles(files);
    await onFileUpload(files);
  };

  const onFileUpload = async (files: File[]) => {
    if (files.length === 0) return;

    console.log(files);

    const formData = new FormData();

    for (const file of files) {
      formData.append("myFiles[]", file, file.name);
    }

    // try {
    //   const response = await fetch("http://3.15.229.37:8081/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     alert("File uploaded successfully");
    //   } else {
    //     alert("Failed to upload file");
    //   }
    // } catch (error) {
    //   console.error("Error uploading file:", error);
    // }
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    if (!dragging) setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    if (dragging) setDragging(false);
  };

  const handleDrop = async (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();

    const files = Array.from(event.dataTransfer.files);
    setFiles(files);
    await onFileUpload(files);
  };

  const handleFileDelete = (name: string) => {
    const newFiles = files.filter((file) => file.name !== name);
    setFiles(newFiles);
  };

  const createAssistant = () => {
    console.log("create assistant");
  };

  return (
    <>
      <section className="flex flex-col items-center text-white gap-4">
        <h1 className="text-7xl font-bold">Your personal</h1>
        <h2 className="text-8xl font-bold bg-gradient-to-b from-blue-400 to-indigo-700 text-transparent bg-clip-text">
          Research assistant
        </h2>
        <p className="text-xl">Attach all documents you want to source information from</p>
      </section>
      <section className="flex gap-10 flex-wrap mt-12">
        {files.map((file) => {
          return <FilePreview file={file} key={file.name} handleFileDelete={handleFileDelete} />;
        })}
      </section>
      <DragAndDrop
        dragging={dragging}
        handleDragLeave={handleDragLeave}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        onFileChange={onFileChange}
      />
      <section></section>
    </>
  );
}
