"use client"
import { GET_CHAR_BY_ID } from "@/features/characters/queries";
import { GetCharByIdQuery, GetCharByIdQueryVariables } from "@/gql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import router from "next/router";
import "./page.css"


const Page = () => {

    const { id } = useParams();

    const nextID = String(id)

    if (!nextID) {
        return <h1>No ID recieved</h1>
    }

    const { data, loading, error } = useQuery<GetCharByIdQuery, GetCharByIdQueryVariables>(GET_CHAR_BY_ID, { variables: { characterId: nextID } })

    return (
        <div>
            {loading && <h1>Loading...</h1>}

            {error && <h1>Error: {error.message}</h1>}

            <div className="charDetail" onClick={() => router.push(`/character/${nextID}`)}>
                <img src={data?.character?.image ? data.character.image : undefined} />
                <div className="details">
                    <ul>
                        <li>Name: {data?.character?.name}</li>
                        <li>Status: {data?.character?.status}</li>
                        <li>Species: {data?.character?.species}</li>
                        <li>Origin: {data?.character?.origin?.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page