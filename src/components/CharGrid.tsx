import { SEARCH_CHARS } from "@/features/characters/queries"
import { GetMainPageCharsQuery, GetMainPageCharsQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"
import { useState } from "react"


const CharGrid = (id: string) => {

    const [search, setSearch] = useState<string>("")

    const { data, loading } = useQuery<GetMainPageCharsQuery, GetMainPageCharsQueryVariables>(SEARCH_CHARS, { variables: { filter: { name: search } } })

    return
}