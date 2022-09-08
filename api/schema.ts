import { makeSchema } from "nexus";
import path from "path";
import * as types from "./graphql";

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
    typegen: path.join(process.cwd(), 'generated/nexus-typegen.ts'),
  }
})

export default schema
