export type FileType = string; // Or define with more specific types

export function getFileType(fileName: string): FileType {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return 'image';
    case 'pdf':
      return 'pdf';
    case 'csv':
      return 'csv';
    case 'doc':
    case 'docx':
      return 'document';
    case 'mp3':
    case 'wav':
      return 'audio';
    case 'mp4':
    case 'mov':
      return 'video';
    case 'xls':
    case 'xlsx':
      return 'spreadsheet';
    case 'ppt':
    case 'pptx':
      return 'presentation';
    case 'zip':
    case 'rar':
      return 'archive';
    case 'js':
    case 'py':
    case 'java':
    case 'cpp':
      return 'code';
    default:
      return 'other';
  }
}