import { gql } from "@apollo/client";

export const QUERIES = {
  GET_USER_ROOMS: gql`
    {
      usersRooms {
        rooms {
          id
          name
        }
      }
    }
  `,
  GET_SINGLE_ROOM: gql`
    query getSingleRoom($id: String!) {
      room(id: $id) {
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
        user {
          id
          firstName
          lastName
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
  CHAT_SUBSCRIPTION: gql`
    subscription messageAdded($roomId: String!) {
      messageAdded(roomId: $roomId) {
        body
        id
        insertedAt
        user {
          id
        }
      }
    }
  `,
};
