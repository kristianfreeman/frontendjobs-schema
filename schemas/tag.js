const tag = {
  title: "Tag",
  name: "tag",
  type: "document",
  fields: [
    {
      title: "slug",
      name: "slug",
      type: "string"
    },
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Jobs",
      name: "jobs",
      type: "array",
      of: [{ type: "reference", to: { type: "job" } }]
    }
  ]
};

export default tag;
