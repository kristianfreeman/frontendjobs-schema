const job_tag = {
  title: "JobTag",
  name: "job_tag",
  type: "document",
  fields: [
    {
      title: "Job",
      name: "job",
      type: "reference",
      to: [{ type: "job" }]
    },
    {
      title: "Tag",
      name: "tag",
      type: "reference",
      to: [{ type: "tag" }]
    }
  ]
};

export default job_tag;
