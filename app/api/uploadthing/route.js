// app/api/uploadthing/route.js
import { createRouteHandler } from "uploadthing/next";
import { uploadRouter } from "./core";
 
export { GET, POST } from createRouteHandler({
  router: uploadRouter,
});