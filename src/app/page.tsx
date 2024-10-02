"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function LandingPage() {
  const { theme } = useTheme();

  return (
    <div className="bg-background text-foreground">
      <div className="relative isolate px-4 sm:px-6 pt-10 sm:pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-4 sm:py-8 lg:py-12">
          <div className="text-center">
            <Image
              src={theme === 'dark' ? "/logo-dark.png" : "/logo-light.png"}
              width="150"
              height="150"
              alt="OniDrive logo"
              className="inline-block mb-6 sm:mb-8 w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
            />

            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight">
              The easiest way to upload and share files with your company
            </h1>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-muted-foreground">
              Make an account and start managing your files in less than a
              minute.
            </p>
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-6">
              <Link
                href="/dashboard/files"
                className="w-full sm:w-auto rounded-md bg-primary px-3.5 py-2.5 text-sm sm:text-base lg:text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto text-sm sm:text-base lg:text-lg font-semibold leading-6 text-foreground hover:text-primary"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
