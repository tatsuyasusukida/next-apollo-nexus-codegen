import { NextPage } from "next"
import { json } from "stream/consumers";
import { gql, useQuery } from "urql";
import { DraftsDocument } from "../generated/codegen";

export const query = gql`
  query Drafts {
    drafts {
      id
      title
      body
      published
    }
  }
`

const Client: NextPage = () => {
  const [result] = useQuery({ query: DraftsDocument })

  return (
    <pre>
      {JSON.stringify(result?.data?.drafts, null, 2)}
    </pre>
  )
}

export default Client
