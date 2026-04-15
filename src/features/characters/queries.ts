import { gql } from "@apollo/client";



export const GET_MAIN_PAGE_CHARS = gql`
    query getMainPageChars {
        characters {
            results {
            id
            name
            image
            }
        }
    }
`;