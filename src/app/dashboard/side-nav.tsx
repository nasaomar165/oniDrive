"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { href: "/dashboard/files", icon: FileIcon, label: "All Files" },
    { href: "/dashboard/favorites", icon: StarIcon, label: "Favorites" },
    { href: "/dashboard/trash", icon: TrashIcon, label: "Trash" },
  ];

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          className="fixed top-4 left-4 z-50 p-2"
          onClick={toggleNav}
        >
          <MenuIcon size={24} />
        </Button>
      )}

      <nav
        className={clsx(
          "fixed md:sticky top-0 left-0 h-full md:h-[calc(100vh-4rem)] transform md:translate-x-0 transition-transform duration-200 ease-in-out z-30",
          "bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent shadow-lg md:shadow-none",
          "w-64 md:w-20 lg:w-64",
          isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""
        )}
      >
        <div className="h-full flex flex-col p-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="mb-2">
              <Button
                variant="ghost"
                className={clsx(
                  "flex items-center gap-2 w-full justify-start px-2 py-1.5",
                  "transition-colors duration-200",
                  {
                    "text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-900 md:bg-transparent md:dark:bg-transparent": pathname.includes(item.href),
                    "hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-gray-100/50 md:dark:hover:bg-gray-700/50": !pathname.includes(item.href),
                  }
                )}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <item.icon size={20} />
                <span className="md:hidden lg:inline">{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </nav>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleNav}
        />
      )}
    </>
  );
}