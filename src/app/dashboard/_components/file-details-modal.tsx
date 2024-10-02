import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Doc } from "../../../../convex/_generated/dataModel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FileIcon, defaultStyles } from 'react-file-icon';

interface FileDetailsModalProps {
  file: Doc<"files"> & { isFavorited: boolean };
  isOpen: boolean;
  onClose: () => void;
}

export function FileDetailsModal({ file, isOpen, onClose }: FileDetailsModalProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{file.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {file.type === "image" && (
            <div className="relative aspect-square">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  Loading...
                </div>
              )}
              <img
                src={file.url}
                alt={file.name}
                className="object-cover w-full h-full rounded-md"
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            <div className="font-semibold">Type:</div>
            <div>{file.type}</div>
            <div className="font-semibold">Size:</div>
            <div>{(file.size / 1024 / 1024).toFixed(2)} MB</div>
            <div className="font-semibold">Favorited:</div>
            <div>{file.isFavorited ? "Yes" : "No"}</div>
          </div>
        </div>
        <Button asChild>
          <a href={file.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Open File <ExternalLink size={16} />
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function FilePreview({ file }: { file: FileType }) {
  const iconStyle = {
    width: '100px',
    height: '100px',
  };

  switch (file.type) {
    case "image":
      return <img src={file.url} alt={file.name} className="max-w-full h-auto" />;
    case "pdf":
      return <FileIcon extension="pdf" {...defaultStyles.pdf} {...iconStyle} />;
    case "csv":
    case "spreadsheet":
      return <FileIcon extension={file.type === "csv" ? "csv" : "xlsx"} {...defaultStyles.spreadsheet} {...iconStyle} />;
    case "document":
      return <FileIcon extension="docx" {...defaultStyles.docx} {...iconStyle} />;
    case "audio":
      return <FileIcon extension="mp3" {...defaultStyles.mp3} {...iconStyle} />;
    case "video":
      return <FileIcon extension="mp4" {...defaultStyles.mp4} {...iconStyle} />;
    case "presentation":
      return <FileIcon extension="pptx" {...defaultStyles.pptx} {...iconStyle} />;
    case "archive":
      return <FileIcon extension="zip" {...defaultStyles.zip} {...iconStyle} />;
    case "code":
      return <FileIcon extension="js" {...defaultStyles.js} {...iconStyle} />;
    default:
      return <FileIcon extension="" {...defaultStyles.generic} {...iconStyle} />;
  }
}