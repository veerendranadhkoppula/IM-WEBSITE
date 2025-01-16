import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  resumeUploader: f({
    pdf: { maxFileSize: "4MB" }
  })
    .middleware(async () => {
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete:", file.url);
      return { fileUrl: file.url };
    }),
};

// export type OurFileRouter = typeof ourFileRouter;

// Create: app/api/uploadthing/route.ts
import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});