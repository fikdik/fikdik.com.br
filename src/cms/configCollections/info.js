const businessInfo = {
  file: 'content/info/business.md',
  label: 'Business Info',
  name: 'businessInfo',
  fields: [
    { label: 'Phone Display', name: 'phoneDisplay', widget: 'string' },
    { label: 'Phone Data', name: 'phoneData', widget: 'string' },
  ],
}
export default {
  name: 'info',
  label: 'Business Info',
  files: [businessInfo],
}
