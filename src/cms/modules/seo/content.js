const brandFields = {
  file: 'content/seo/seo.json',
  label: 'Brand',
  name: 'brand',
  fields: [
    { label: 'Brand Name', name: 'name', widget: 'string' },
    { label: 'Short Slogan', name: 'slogan', widget: 'string' },
    { label: 'Main Logo', name: 'logo', widget: 'image' },
    { label: 'White Background Logo', name: 'logoWBG', widget: 'image' },
    { label: 'Black Background Logo', name: 'logoBBG', widget: 'image' },
    { label: 'Main Brand Color RGB', name: 'logo', widget: 'string' },
  ],
}

const cmsPanelSchema = {
  name: 'seo',
  label: 'Brand, SEO & Share',
  files: [brandFields],
}

export default cmsPanelSchema
