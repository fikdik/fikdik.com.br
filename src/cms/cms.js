import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

// import FileSystemBackend from "netlify-cms-backend-fs";

// const config = {
//   display_url: window.location.origin
// };

// if (process.env.NODE_ENV === "development") {
//   // config.load_config_file = false
//   config.backend = {
//     name: "file-system",
//     api_root: "/api"
//   };
//   CMS.registerBackend("file-system", FileSystemBackend);
// } else {
//   config.backend = {
//     name: "github",
//     repo: "fikdik/fikdik.com.br",
//     branch: "master"
//   };
// }
// CMS.init({ config });

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
