import manifest from "content/settings/manifest.json"
import CMS from "netlify-cms-app"
// import FileSystemBackend from "netlify-cms-backend-fs"
import cloudinary from "netlify-cms-media-library-cloudinary"
import uploadcare from "netlify-cms-media-library-uploadcare"
import { repository } from "../../package.json"
import { collections, registerPreviews } from "./collections"

const config = {
  display_url: window.location.origin,
  logo_url: manifest.icon,

  collections,
}

config.backend = {
  name: "test-repo",
  branch: "master",
  publish_mode: "editorial_workflow",
  squash_merges: true,
  commit_messages: {
    create: 'Create {{collection}} "{{slug}}"',
    update: 'Update {{collection}} "{{slug}}"',
    delete: 'Delete {{collection}} "{{slug}}"',
    uploadMedia: '[skip ci] Upload "{{path}}"',
    deleteMedia: '[skip ci] Delete "{{path}}"',
  },
}
if (repository) {
  config.backend.repo = repository.split("github.com/")[1].split(".git")[0]
}

console.log(repository?.split("github.com/")[1].split(".git")[0])

if (process.env.NODE_ENV === "development") {
  config.local_backend = true
}

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
// }

CMS.init({ config })

registerPreviews()
