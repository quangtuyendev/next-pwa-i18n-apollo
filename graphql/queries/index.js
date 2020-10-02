import { gql } from '@apollo/client';

export const CHARACTERS_LIST = gql`
  query CharacterList {
    characters {
      results {
        gender
        id
        image
        name
        species
        status
        type
      }
    }
  }
`;

export const CHARACTER_DETAILS = gql`
  query CharacterDetails($id: ID!) {
    character(id: $id) {
      gender
      id
      image
      name
      species
      status
      type
    }
  }
`;
