"use client"

import { GET_MAIN_PAGE_CHARS } from "@/features/characters/queries"
import { GetMainPageCharsDocument, GetMainPageCharsQuery, GetMainPageCharsQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"


const Home = () => {

  const { data, loading } = useQuery<GetMainPageCharsQuery, GetMainPageCharsQueryVariables>(GET_MAIN_PAGE_CHARS)

  return (
    <h1>{data?.characters?.results[0]?.name}</h1>
  )
}

export default Home