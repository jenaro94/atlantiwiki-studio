// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import stats from "./stats";
import character from "./character";
import mainChar from "./mainChar";
import equipment from "./equipment";
import _class from "./class";
import race from "./race";
import weapon from "./weapon";
import hitPattern from "./hitPattern";
import skill from "./skill";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    mainChar,
    equipment,
    race,
    weapon,
    hitPattern,
    skill,
    _class,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    character,
    stats,
  ]),
});
