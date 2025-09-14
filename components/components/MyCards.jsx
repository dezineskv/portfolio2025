import React from "react";

import { CardCarousel } from "@/components/ui/card-carousel";

const MyCards = () => {
  const images = [
    {
      src: "https://icons.veryicon.com/png/Internet%20%26%20Web/Web%20Developer/css%203.png",
      alt: "Image 1",
    },
    {
      src: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
      alt: "Image 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5G8eECOD1PyiahPpMfAccK5bsb-iT5ozbw&s",
      alt: "Image 3",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk9FMfJHUhFRVcv2j5Ggnp6tapgUWigjcLg&s",
      alt: "Image 4",
    },
    {
      src: "https://i.ibb.co/Z6TzVg3D/js.png",
      alt: "Image 5",
    },

    {
      src: "https://i.ibb.co/ds7fXRrd/vscode.png",
      alt: "Image 6",
    },
    {
      src: "https://i.ibb.co/SXY0YdBr/tailwindcss.png",
      alt: "Image 7",
    },
    {
      src: "https://i.ibb.co/spy4N7Zq/github.png",
      alt: "Image 8",
    },
  ];

  return (
    <div className="sm:w-full sm:max-w-[400px] sm:mx-auto md:w-[60%] md:max-w-[560px] md:pb-4 sm:px-6 pt-10 md:pl-8 md:pr-18">
      <div className="mx-auto mt-10 mb-20 rounded-b-2xl rounded-t-4xl bg-primary-foreground md:w-[580px] sm:mx-2">
        <CardCarousel
          images={images}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </div>
  );
};

export default MyCards;
