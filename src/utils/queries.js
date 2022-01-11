import { gql } from "@apollo/client";

export const QUERIES = {
  GET_USER_ROOMS: gql`
    {
      usersRooms {
        rooms {
          id
        }
      }
    }
  `,
  GET_SINGLE_ROOM: gql`
    query getSingleRoom($id: String!) {
      room(id: $id) {
        id
        name
        messages {
          body
          insertedAt
        }
      }
    }
  `,
  GET_CHAT_ROOM: gql`
    query getSingleRoom($id: String!) {
      room(id: $id) {
        user {
          id
        }
        messages {
          id
          body
          insertedAt
          user {
            id
            firstName
            lastName
          }
        }
      }
    }
  `,
  SEND_MESSAGE: gql`
    mutation sendMessage($body: String!, $roomId: String!) {
      sendMessage(body: $body, roomId: $roomId) {
        id
        body
        insertedAt
        user {
          id
        }
      }
    }
  `,
};
