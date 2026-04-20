"use client"
import { GET_CHAR_BY_ID } from "@/features/characters/queries"
import { GetCharByIdQuery, GetCharByIdQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"
import { useRouter } from "next/navigation"


const CharGrid = (params: { id: string }) => {

    const id = params.id

    const router = useRouter()

    const { data, loading, error } = useQuery<GetCharByIdQuery, GetCharByIdQueryVariables>(GET_CHAR_BY_ID, { variables: { characterId: params.id } })

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error: {error.message}</h1>}

            <div className="charCard" onClick={() => router.push(`/character/${id}`)}>
                <img src={data?.character?.image ? data.character.image : undefined} />
                <h1>{data?.character?.name}</h1>
                <h2>{data?.character?.status}</h2>
            </div>
        </div>
    )
}

export default CharGrid