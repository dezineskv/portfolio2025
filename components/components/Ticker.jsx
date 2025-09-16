"use client";

import { TextScroll } from "@/components/ui/text-scroll";

function Ticker() {
  return (
    <TextScroll
      className="font-display text-center text-2xl font-semibold tracking-tighter text-gray-500 dark:text-black md:text-3xl md:leading-[4rem] sm:p-4 my-auto"
      text="HTML | CSS | JavaScript | ReactJs | NextJs | MERN | API | UX | Branding | NodeJs | GitHub | "
      default_velocity={1}
    />
  );
}
export default Ticker;
