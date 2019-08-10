const tag_group = {
  title: "Tag Group",
  name: "tag_group",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }]
    }
  ]
};

export default tag_group;
