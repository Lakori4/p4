import { gql } from "@apollo/client";



export const GET_MAIN_PAGE_CHARS = gql`
    query GetMainPageChars($page: Int) {
        characters(page: $page) {
            results {
                id
            }
            info {
                pages
                prev
                next
            }
        }
    }
`;

export const GET_CHAR_BY_ID = gql`
    query GetCharById($characterId: ID!) {
    character(id: $characterId) {
        name
        status
        image
    }
    }
`

/* export const SEARCH_CHARS = gql`
    query searchChar($filter: FilterCharacter) {
        characters(filter: $filter) {
            results {
            id
            }
        }
    }
`; */