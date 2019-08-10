const job = {
  title: "Job",
  name: "job",
  type: "document",
  preview: {
    select: {
      title: "position",
      subtitle: "company_name"
    }
  },
  fieldsets: [{ name: "external_source", title: "External Source" }],
  fields: [
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Slug",
      name: "slug",
      type: "string"
    },
    {
      title: "Stripe ID",
      name: "stripe_id",
      type: "string"
    },
    {
      title: "Requirements",
      name: "requirements",
      type: "text"
    },
    {
      title: "Responsibilities",
      name: "responsibilities",
      type: "text"
    },
    {
      title: "Application Instructions",
      name: "application_instructions",
      type: "text"
    },
    {
      title: "Contact Email",
      name: "contact_email",
      type: "string"
    },
    {
      title: "Application URL",
      name: "application_url",
      type: "string"
    },
    {
      title: "Location",
      name: "location",
      type: "string"
    },
    {
      title: "Position",
      name: "position",
      type: "string"
    },
    {
      title: "Posted at",
      name: "posted_at",
      type: "datetime"
    },
    {
      title: "Company Name",
      name: "company_name",
      type: "string"
    },
    {
      title: "Company Website",
      name: "company_website",
      type: "string"
    },
    {
      title: "Company Twitter Username",
      name: "company_twitter_username",
      type: "string"
    },
    {
      title: "Company Icon",
      name: "company_icon",
      type: "string"
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
      options: {
        layout: "tags"
      }
    },
    {
      title: "URL",
      name: "url",
      type: "string"
    },
    {
      title: "Remote Friendly",
      name: "remote_friendly",
      type: "boolean"
    },
    {
      title: "Help with Relocation",
      name: "help_with_relocation",
      type: "boolean"
    },
    {
      title: "External Source Name",
      name: "external_source_name",
      type: "string",
      fieldset: "external_source"
    },
    {
      title: "External Source Link",
      name: "external_source_link",
      type: "string",
      fieldset: "external_source"
    },
    {
      title: "External Source GUID",
      name: "external_source_guid",
      type: "string",
      fieldset: "external_source_guid"
    }
  ]
};

export default job;
