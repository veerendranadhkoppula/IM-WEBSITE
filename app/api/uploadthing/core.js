// app/api/uploadthing/core.js
import { createUploadthing } from "uploadthing/next";
 
const f = createUploadthing();
 
export const uploadRouter = {
  resumeUploader: f({
    pdf: { maxFileSize: "4MB" },
    doc: { maxFileSize: "4MB" },
    docx: { maxFileSize: "4MB" }
  })
    .middleware(async () => {
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete:", file.name);
      return { fileUrl: file.url };
    }),
};