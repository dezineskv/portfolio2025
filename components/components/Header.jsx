"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu, X, Mail, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import SearchBar from "@/components/components/SearchBar";

const skillsItems = [
  {
    title: "HTML, CSS, Frontend, MERN,...",
    href: "/skills",
    description: "HTML, CSS, Frontend, MERN,...",
  },
];

const aboutItems = [
  {
    title: "My Story",
    href: "/about",
    description: "Learn about our journey and mission",
  },
];

const projectsItems = [
  {
    title: "Featured Projects",
    href: "/featured-projects",
    description: "featured projects",
  },
  {
    title: "All",
    href: "/projects",
    description: "all projects",
  },
  {
    title: "Overview",
    href: "/filter",
    description: "filter projects, overview",
  },
];

const resumeItems = [
  {
    title: "Resume",
    href: "/resume",
    description: "Resume",
  },
];

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [inputValue, setInputValue] = useState(searchQuery || "");

  const handleSearch = (event) => {
    const term = event.target.value;
    setInputValue(term);

    const newParams = new URLSearchParams(searchParams);
    if (term) {
      newParams.set("q", term);
    } else {
      newParams.delete("q");
    }
    router.replace(`?${newParams.toString()}`);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="bg-background md:max-w-[1200px] mx-auto flex flex-col gap-1 px-8 py-3 md:h-[18vh] md:w-6xl md:flex-row md:items-center md:justify-between">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <div className="text-left">
            <Link href="/">
              <Image
                src={
                  theme == "dark"
                    ? "https://i.ibb.co/0ydBkZYJ/logo-black.png"
                    : "https://i.ibb.co/7xV8t6xY/logo-white.png"
                }
                alt="Logo"
                width={180}
                height={120}
                className="max-h-[120px] w-auto max-w-[180px] border-0 pr-4 pb-4 sm:mx-auto md:ml-2 md:pl-2"
                priority={true}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="mr-8 sm:border-4 sm:border-gray-400 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation -customized */}
        <NavigationMenu className="hidden lg:flex ml-10">
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem onClick={toggleDropdown}>
              <NavigationMenuTrigger className="text-md font-medium text-gray-300 ">
                <Link href="/projects">Projects</Link>
              </NavigationMenuTrigger>
              {isDropdownOpen && (
                <ul className="dropdown-menu absolute left-0 mt-2 w-32 z-20 rounded-md bg-white text-left shadow-lg">
                  <li className="text-black px-2">
                    <Link href="/featured-projects" className="text-black">
                      <span className="text-black">Featured Apps</span>
                    </Link>
                  </li>
                  <li className="text-black px-2">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="text-black px-2">
                    <Link href="/filter">Overview</Link>
                  </li>
                </ul>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-300">
              <Link href="/about">About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-300">
              <Link href="/skills">Skills</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-gray-300">
              <Link href="/resume">Resume</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden items-center justify-end gap-x-3  lg:flex lg:flex-1">
          {/* Searchbar here */}
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar />
          </Suspense>
          {/* email here */}
          <div className="w-[38px] h-{38px] rounded-lg border-1 border-gray-600 py-[.4rem] pl-[.37rem] pr-2 text-center">
            <Link
              href="mailto:kimbotickool@gmail.com"
              target="_blank"
              rel="noopener
              noreferrer"
            >
              {/* <Mail className="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </Link>
          </div>
          {/* github here */}
          <div className="w-[38px] h-{38px] rounded-lg border-1 border-gray-600 py-[.4rem] pl-[.4rem] pr-1 text-center">
            <Link
              href="https://github.com/dezineskv"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <IoLogoGithub className="text-2xl" /> */}
              <svg
                stroke="white"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
            </Link>
          </div>
          {/* linkedin here */}
          <div className="w-[38px] h-{38px] rounded-lg border-1 border-gray-600 py-[.4rem] pl-[.4rem] pr-1 text-center">
            <Link
              href="https://www.linkedin.com/in/kim-vidal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <IoLogoLinkedin className="text-2xl" /> */}
              <svg
                stroke="white"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
              </svg>
            </Link>
          </div>
          {/* theme toggle here */}
          {/* theme toggle here */}
          <div className="rounded-lg border-1 border-gray-600 bg-white">
            <ThemeToggleButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 border-t pt-4 lg:hidden">
            <div className="flex flex-col space-y-4 space-x-3">
              {/* Mobile Menu Items */}
              <div className="space-y-3">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between pl-6 text-xl font-medium">
                    Projects
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
                    {projectsItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between pl-6 text-xl font-medium">
                    About
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between pl-6 text-xl font-medium">
                    Skills
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
                    {skillsItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between pl-6 text-xl font-medium">
                    Resume
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
                    {resumeItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-4 border-t pt-4">
                <Button
                  asChild
                  className="mx-6 bg-gray-900 py-6 text-xl text-white"
                >
                  <Link
                    href="mailto:kimbotickool@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Email Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
