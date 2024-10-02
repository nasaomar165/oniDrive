"use client";
import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--clerk-primary', '#ffffff');
      root.style.setProperty('--clerk-background', '#1f2937');
    } else {
      root.style.setProperty('--clerk-primary', '#000000');
      root.style.setProperty('--clerk-background', '#ffffff');
    }
  }, [theme]);

  return (
    <div className="relative z-10 border-b py-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="w-full flex justify-between items-center lg:w-auto">
          <Link href="/" className="flex gap-2 items-center text-xl text-black dark:text-white mx-auto lg:mx-0">
            <Image 
              src={theme === 'dark' ? "/logo-dark-sm.png" : "/logo-light-sm.png"} 
              width="50" 
              height="50" 
              alt="OniDrive logo" 
            />
            OniDrive
          </Link>

          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-2 w-full lg:w-auto mt-4 lg:mt-0`}>
          <SignedIn>
            {!isDashboard && (
              <Button variant={"outline"}>
                <Link href="/dashboard/files">Your Files</Link>
              </Button>
            )}
          </SignedIn>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full sm:w-auto mb-2 sm:mb-0 "
          >
            <Sun className="mr-2 ml-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="mr-2 ml-2 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <OrganizationSwitcher 
            appearance={{
              elements: {
                rootBox: "bg-gray-50 dark:bg-gray-900",
                organizationSwitcherTrigger: "text-black dark:text-white",
                organizationSwitcherPopoverCard: "bg-gray-50 dark:bg-gray-900",
                organizationSwitcherPopoverText: "text-black dark:text-white",
              },
            }}
          />
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
                userButtonPopoverCard: "bg-gray-50 dark:bg-gray-900",
                userButtonPopoverText: "text-black dark:text-white",
              },
            }}
          />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
