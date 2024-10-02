import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatRelative } from "date-fns";

import { Doc } from "../../../../convex/_generated/dataModel";
import { FileTextIcon, GanttChartIcon, ImageIcon, FileIcon, VideoIcon, AudioIcon } from "lucide-react";
import { ReactNode } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Image from "next/image";
import { FileCardActions } from "./file-actions";

export function FileCard({
  file,
  onClick,
}: {
  file: Doc<"files"> & { isFavorited: boolean };
  onClick: () => void;
}) {
  const userProfile = useQuery(api.users.getUserProfile, {
    userId: file.userId,
  });

  const typeIcons = {
    image: <ImageIcon />,
    pdf: <FileTextIcon />,
    csv: <GanttChartIcon />,
    document: <FileTextIcon />,
    video: <VideoIcon />,
    audio: <AudioIcon />,
    other: <FileIcon />,
  } as Record<string, ReactNode>;

  const getFileContent = () => {
    switch (file.type) {
      case "image":
        return file.url ? (
          <Image alt={file.name} width="200" height="100" src={file.url} className="object-contain max-w-full max-h-full" />
        ) : (
          <ImageIcon className="w-12 h-12 sm:w-20 sm:h-20" />
        );
      case "pdf":
      case "document":
        return <FileTextIcon className="w-12 h-12 sm:w-20 sm:h-20" />;
      case "csv":
        return <GanttChartIcon className="w-12 h-12 sm:w-20 sm:h-20" />;
      case "video":
        return <VideoIcon className="w-12 h-12 sm:w-20 sm:h-20" />;
      case "audio":
        return <AudioIcon className="w-12 h-12 sm:w-20 sm:h-20" />;
      default:
        return <FileIcon className="w-12 h-12 sm:w-20 sm:h-20" />;
    }
  };

  return (
    <div className="rounded-md border h-full">
      <Card className="h-full flex flex-col">
        <CardHeader className="relative p-4">
          <CardTitle className="flex gap-2 text-sm font-normal items-center">
            <div className="flex justify-center">{typeIcons[file.type] || typeIcons.other}</div>
            <span className="truncate">{file.name}</span>
          </CardTitle>
          <div className="absolute top-2 right-2">
            <FileCardActions isFavorited={file.isFavorited} file={file} />
          </div>
        </CardHeader>
        <CardContent 
          className="flex-grow flex justify-center items-center p-2 cursor-pointer" 
          onClick={onClick}
        >
          {getFileContent()}
        </CardContent>
        <CardFooter className="flex flex-col justify-between p-2 gap-2">
          <div className="flex gap-2 text-xs text-gray-700 items-center w-full">
            <Avatar className="w-6 h-6">
              <AvatarImage src={userProfile?.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="truncate">{userProfile?.name}</span>
          </div>
          <div className="text-xs text-gray-700">
            {formatRelative(new Date(file._creationTime), new Date())}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}