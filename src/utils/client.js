import * as AbsintheSocket from "@absinthe/socket";
import PhoenixSocket from "../components/Socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { hasSubscription } from "@jumpn/utils-graphql";
import { URL, WSURL } from "./consts";

export const setClient = (token) => {
  const httpLink = new HttpLink({ uri: URL });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });
  const authedHttpLink = authLink.concat(httpLink);
  const phoenixSocket = new PhoenixSocket(WSURL, {
    params: () => {
      return { token: token };
    },
  });
  const absintheSocket = AbsintheSocket.create(phoenixSocket);
  const websocketLink = createAbsintheSocketLink(absintheSocket);
  const link = split(
    (operation) => hasSubscription(operation.query),
    websocketLink,
    authedHttpLink
  );
  const cache = new InMemoryCache();

  return new ApolloClient({
    link,
    cache,
  });
};
