"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ image, images, includes, title }) {
  // State to manage the large image source
  const [largeImageSrc, setLargeImageSrc] = useState(image);

  // Thumbnail images
  const thumbnails = images || [];

  return (
    <div>
      {/* Large Image */}
      <div
        style={{ marginBottom: "20px" }}
        className="flex w-full flex-row gap-1"
      >
        <Image
          src={largeImageSrc}
          alt="Large Display"
          width={500}
          height={500}
          priority
          className="mr-auto border-1 border-gray-800 rounded-lg mb-6"
        />
        <div className="flex flex-col mr-auto pl-4 gap-2 text-sm text-[#99a1af]">
          <p>
            <span className="font-bold pb-2 text-xl text-black">
              {title} includes:
            </span>
          </p>
          <div>
            {includes?.items?.map((include, index) => (
              <ul key={index}>
                <li>- {include}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div style={{ display: "flex", gap: "10px" }}>
        {thumbnails.map((thumb, index) => (
          <div key={index} onClick={() => setLargeImageSrc(thumb)}>
            <Image
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              width={160}
              height={120}
              style={{ cursor: "pointer" }}
              className="border-1 border-gray-300 rounded-lg w-[160px] h-[120px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
