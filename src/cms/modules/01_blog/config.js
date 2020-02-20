const fields = [
  {
    label: "Template Key",
    name: "templateKey",
    widget: "hidden",
    default: "blog/post",
  },
  { label: "Author", name: "author", widget: "string" },
  { label: "Title", name: "title", widget: "string" },
  { label: "Description", name: "description", widget: "text" },
  {
    label: "Highlight Post",
    name: "highlight",
    widget: "boolean",
    required: false,
  },
  { label: "Layout Cover", name: "cover", widget: "image", required: false },
  { label: "Body", name: "body", widget: "markdown" },
  { label: "Tags", name: "tags", widget: "list" },
  {
    label: "Metadata",
    name: "metadata",
    widget: "object",
    required: false,
    fields: [
      { label: "Publish Date", name: "datePublished", widget: "datetime" },
      { label: "Updated Date", name: "dateModified", widget: "datetime" },
      {
        label: "Cover",
        name: "cover",
        widget: "image",
        default: "/img/ogimage.jpg",
      },
      {
        label: "Headline",
        name: "headline",
        widget: "string",
        required: false,
        pattern: [".{0,110}", "limit text to 110 characteres"],
      },
    ],
  },
]

export default {
  label: "Posts",
  name: "blog",
  folder: "src/pages/blog",
  create: true,
  // slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  slug: "{{slug}}",
  fields,
}
