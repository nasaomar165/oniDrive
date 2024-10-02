import Link from "next/link";

export function Footer() {
  return (
    <div className="h-auto min-h-40 bg-gray-50 dark:bg-gray-900 mt-12 flex items-center border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        
        <div className="flex flex-wrap justify-center space-x-6 mb-4">
        <Link className="z-10 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mb-4" href="/">
          OniDrive
        </Link>
          <Link className="z-10 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="/">
            Privacy Policy
          </Link>
          <Link className="z-10 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="/">
            Terms of Service
          </Link>
          <Link className="z-10 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="/">
            About
          </Link>
        </div>
        
      </div>
    </div>
  );
}
