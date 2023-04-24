import React from "react";
import { FaImage } from "react-icons/fa";
import imageIcone from "../../public/image-icon.svg";
import { RxCross2 } from "react-icons/rx";

interface filePreviewProps {
  file: File;
  handleFileDelete: (name: string) => void;
}

export default function FilePreview({ file, handleFileDelete }: filePreviewProps) {
  return (
    <section className="border-2 w-56 h-56 rounded-3xl flex items-center justify-center flex-col">
      <div className="w-4/5 h-4/5 bg-charcoal rounded-3xl relative">
        <RxCross2
          className="rounded-full text-white border-2 absolute top-3 right-3 cursor-pointer"
          onClick={() => {
            handleFileDelete(file.name);
          }}
        />
        <div className="flex items-center justify-center w-full h-full">
          <svg
            width="42"
            height="38"
            viewBox="0 0 42 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.126 37.496H2.72c-.3 0-.603 0-.904-.03-1.537-.146-2.155-1.183-1.5-2.586.569-1.21 1.189-2.39 1.79-3.588l8.527-16.92c.088-.172.18-.345.282-.51.716-1.15 1.879-1.311 2.795-.32.645.695 1.192 1.475 1.768 2.227 2.928 3.836 5.857 7.674 8.785 11.514 1.279 1.67 2.89 1.762 4.392.26.746-.747 1.474-1.512 2.229-2.252 1.36-1.334 2.904-1.254 4.015.302 2.23 3.121 4.404 6.284 6.589 9.436.17.248.301.52.387.809.212.724-.087 1.306-.82 1.5-.46.11-.93.16-1.403.15-6.172.011-12.347.013-18.526.007Zm13.76-30.908a6.09 6.09 0 0 1-1.029 3.38 6.051 6.051 0 0 1-9.342.892 6.084 6.084 0 0 1-1.282-6.64 6.076 6.076 0 0 1 2.254-2.718A6.053 6.053 0 0 1 28.867.5c1.6.02 3.127.67 4.253 1.809a6.12 6.12 0 0 1 1.766 4.279Z"
              opacity=".5"
              fill="#4F4F4F"
            />
          </svg>
        </div>
      </div>
      {/* <imageIcone className="w-4/5 h-4/5 text-gray-500 bg-gray-400 rounded-3xl flex items-center justify-center" /> */}
      <div className="text-white">
        {file.name.length > 20 ? file.name.substring(0, 20) + "..." : file.name}
      </div>
    </section>
  );
}
