"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu, ShoppingBag, X, Mail, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import dynamic from "next/dynamic";
import SearchBar from "@/components/components/SearchBar";

const skillsItems = [
  {
    title: "HTML, CSS, Frontend, MERN,...",
    href: "/",
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
    title: "Projects",
    href: "/projects",
    description: "all projects",
  },
  {
    title: "Project Dashboard",
    href: "/filter",
    description: "filter projects",
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
                <ul className="dropdown-menu absolute left-0 mt-2 w-32 rounded-md bg-white text-left shadow-lg">
                  <li className="text-black px-2">
                    <Link href="/featured-projects" className="text-black">
                      <span className="text-black">Featured Apps</span>
                    </Link>
                  </li>
                  <li className="text-black px-2">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="text-black px-2">
                    <Link href="/filter">Sort Projects</Link>
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
          <SearchBar />
          {/* email here */}
          <div className="w-[38px] h-{38px] rounded-lg border-1 border-gray-600 py-[.4rem] pl-[.4rem] pr-1 text-center">
            <Link
              href="mailto:kimbotickool@gmail.com"
              target="_blank"
              rel="noopener
              noreferrer"
            >
              <Mail className="" />
            </Link>
          </div>
          {/* github here */}
          <div className="w-[38px] h-{38px] rounded-lg border-1 border-gray-600 py-[.4rem] pl-[.4rem] pr-1 text-center">
            <Link
              href="https://github.com/dezineskv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="text-2xl" />
            </Link>
          </div>
          {/* linkedin here */}
          <div className="w-[38px] h-{38px] rounded-lg border-1 border-gray-600 py-[.4rem] pl-[.4rem] pr-1 text-center">
            <Link
              href="https://www.linkedin.com/in/kim-vidal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="text-2xl" />
            </Link>
          </div>
          {/* theme toggle here */}
          <div className="rounded-lg border-1 border-gray-600">
            <ThemeToggleButton className="" />
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
