import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import job from "./job";
import tag_group from "./tag_group";
import tag from "./tag";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([job, tag, tag_group])
});
