"use client";
// import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div className="bg-background mx-auto flex md:h-[14vh] max-h-[25vh]">
        <div className="flex flex-col sm:justify-center items-center gap-4 md:px-8 py-12 sm:flex-col md:flex-row md:justify-between md:w-6xl md:max-w-[1280px] mx-auto">
          <div className="md:mr-auto text-left pl-10">
            <Link href="/">
              <Image
                src="https://i.ibb.co/7xV8t6xY/logo-white.png"
                alt="Logo"
                width={200}
                height={120}
                className="max-h-[120px] border-0 w-auto max-w-[200px] pr-10 pb-4 sm:mx-auto"
                priority={true}
              />
            </Link>
          </div>
          <div className="flex sm:flex-col gap-2 px-4 text-lg items-center xs:text-sm md:text-md font-medium md:max-w-lg md:flex-row md:justify-between">
            <div className="flex sm:w-full sm:flex-col md:flex-row sm:text-sm md:text-md items-center my-auto">
              <div className="flex flex-row ">
                <Link href="/projects">Projects&nbsp;</Link>
              </div>
              <div>
                <Link href="/about">&nbsp;About&nbsp;</Link>
              </div>
              <div>
                <Link href="/skills">&nbsp;Skills&nbsp;</Link>
              </div>
            </div>
            <div className="flex flex-row sm:w-full gap-2 md:ml-6">
              <Link
                href="https://github.com/dezineskv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className="text-2xl" />
              </Link>
              <Link
                href="mailto:kimbotickool@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kim-vidal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-sm text-gray-400 pt-6 mb-6">
        &copy; Kim V 2025. San Francisco, CA
      </div>
    </>
  );
}
