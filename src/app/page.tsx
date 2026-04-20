"use client"

import CharGrid from "@/components/CharCard"
import { GET_MAIN_PAGE_CHARS } from "@/features/characters/queries"
import { GetMainPageCharsQuery, GetMainPageCharsQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"
import { useState } from "react"


const Home = () => {
  const [page, setPage] = useState<number>(1)

  const { data, loading } = useQuery<GetMainPageCharsQuery, GetMainPageCharsQueryVariables>(GET_MAIN_PAGE_CHARS, { variables: { page } })


  return (
    <div>
      {loading && <h1>Loading...</h1>}

      {data?.characters?.results?.map(c => c?.id ? <CharGrid key={c.id} id={c.id} /> : null)}

    </div>
  )
}

export default Home