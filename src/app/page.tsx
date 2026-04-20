"use client"

import CharGrid from "@/components/CharCard"
import { GET_MAIN_PAGE_CHARS } from "@/features/characters/queries"
import { GetMainPageCharsQuery, GetMainPageCharsQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"
import { useState } from "react"
import "./page.css"


const Home = () => {
  const [page, setPage] = useState<number>(1)

  const { data, loading, error } = useQuery<GetMainPageCharsQuery, GetMainPageCharsQueryVariables>(GET_MAIN_PAGE_CHARS, { variables: { page } })

  return (
    <div>
      {loading && <h1>Loading...</h1>}

      {error && <h1>Error: {error.message}</h1>}

      <div>

        <div className="charGrid">{data?.characters?.results?.map(c => c?.id ? <CharGrid key={c.id} id={c.id} /> : null)}</div>

        <div className="pager">
          {data?.characters?.info?.prev ? <button onClick={() => { setPage(page - 1) }}> Previous page</button> : undefined}
          <p>Página {page} de {data?.characters?.info?.pages}</p>
          {data?.characters?.info?.next ? <button onClick={() => { setPage(page + 1) }}> Next page</button> : undefined}
        </div>
      </div>

    </div>
  )
}

export default Home