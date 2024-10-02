import { FileBrowser } from "../_components/file-browser";

export default function FilesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <FileBrowser title="Your Files" />
      </div>
    </div>
  );
}