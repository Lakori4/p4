"use client"

import { SEARCH_CHARS } from "@/features/characters/queries"
import { GetMainPageCharsQuery, GetMainPageCharsQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"
import { useState } from "react"


const Home = () => {
  const [search, setSearch] = useState<string>("")

  const { data, loading } = useQuery<GetMainPageCharsQuery, GetMainPageCharsQueryVariables>(SEARCH_CHARS, { variables: { filter: { name: search } } })

  const refreshResults = () => {
    const { data, loading } = useQuery<GetMainPageCharsQuery, GetMainPageCharsQueryVariables>(SEARCH_CHARS, { variables: { filter: { name: search } } })
  }

  return (
    <div>
      <input type="text" value={search} onKeyDown={e => { if (e.key === "Enter") { refreshResults() } }} />
      <ul>{data?.characters?.results?.map(c => <li key={c?.id}>{c?.id}</li>)}</ul>
    </div>
  )
}

export default Home