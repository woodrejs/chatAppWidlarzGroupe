import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { hasSubscription } from "@jumpn/utils-graphql";
import PhoenixSocket from "../components/Socket";

export const setClient = (token) => {
  const URL = "https://chat.thewidlarzgroup.com/api/graphiql";
  const WSURL = "wss://chat.thewidlarzgroup.com/socket";
  // const TOKEN =
  //   "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM3ODk3MTQsImlhdCI6MTY0MTM3MDUxNCwiaXNzIjoiY2hhdGx5IiwianRpIjoiZjk2YjllMWQtMmFiNS00YWM3LTlmZmUtZWEzODc0ZDU5NTJiIiwibmJmIjoxNjQxMzcwNTEzLCJzdWIiOiI5Y2YzOWJhMS04ZTg5LTRjYjYtODAyMC02MGU0NzBlZjRiNGIiLCJ0eXAiOiJhY2Nlc3MifQ.D22G3agnvQsvWV3ekmOTM5I_ifKrMGCWZNY_bEh0U83lKt5TWSZTO9k--rou6GPi04v096AhERnwaFjsdZSU4g";

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
