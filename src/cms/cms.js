import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import brandPagePreview from './modules/brand/preview'

import FileSystemBackend from 'netlify-cms-backend-fs'
import collections from './collections'

const config = {
  display_url: window.location.origin,
  collections,
}

if (process.env.NODE_ENV === 'development') {
  // config.load_config_file = false
  config.backend = {
    name: 'file-system',
    api_root: '/api',
  }
  CMS.registerBackend('file-system', FileSystemBackend)
} else {
  config.backend = {
    name: 'github',
    repo: 'fikdik/fikdik.com.br',
    branch: 'master',
    publish_mode: 'editorial_workflow',
    commit_messages: {
      create: 'Create {{collection}} "{{slug}}"',
      update: 'Update {{collection}} "{{slug}}"',
      delete: 'Delete {{collection}} "{{slug}}"',
      uploadMedia: '[skip ci] Upload "{{path}}"',
      deleteMedia: '[skip ci] Delete "{{path}}"',
    },
  }
  CMS.registerMediaLibrary(uploadcare)
  CMS.registerMediaLibrary(cloudinary)
}
CMS.init({ config })

CMS.registerPreviewTemplate('brand', brandPagePreview)
