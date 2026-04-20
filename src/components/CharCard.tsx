import { GET_CHAR_BY_ID } from "@/features/characters/queries"
import { GetCharByIdQuery, GetCharByIdQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"


const CharGrid = (params: { id: string }) => {

    const { data, loading } = useQuery<GetCharByIdQuery, GetCharByIdQueryVariables>(GET_CHAR_BY_ID, { variables: { characterId: params.id } })

    return (

        <div className="charCard">
            <img src={data?.character?.image ? data.character.image : undefined} />
            <h1>{data?.character?.name}</h1>
            <h2>{data?.character?.status}</h2>
        </div>
    )
}

export default CharGrid