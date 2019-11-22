const brandFields = {
  file: 'content/brand.md',
  label: 'Brand',
  name: 'brand',
  fields: [
    { label: 'Brand Name', name: 'name', widget: 'string' },
    {
      label: 'Short Slogan',
      name: 'slogan',
      widget: 'string',
      required: false,
    },
    {
      label: 'Short Description',
      name: 'description',
      widget: 'string',
      required: false,
    },
    { label: 'Main Logo', name: 'logo', widget: 'image', required: false },
    {
      label: 'White Background Logo',
      name: 'logoWBG',
      widget: 'image',
      required: false,
    },
    {
      label: 'Black Background Logo',
      name: 'logoBBG',
      widget: 'image',
      required: false,
    },
    {
      label: 'Main Brand Color RGB ',
      name: 'color',
      widget: 'string',
      required: false,
    },
  ],
}

const cmsPanelSchema = {
  name: 'brand',
  label: 'Branding, SEO & Share',
  files: [brandFields],
}

export default cmsPanelSchema
