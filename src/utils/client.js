import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { hasSubscription } from "@jumpn/utils-graphql";

const URL = "https://chat.thewidlarzgroup.com/api/graphiql";
const WSURL = "wss://chat.thewidlarzgroup.com/socket";
const TOKEN =
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM3ODk3MTQsImlhdCI6MTY0MTM3MDUxNCwiaXNzIjoiY2hhdGx5IiwianRpIjoiZjk2YjllMWQtMmFiNS00YWM3LTlmZmUtZWEzODc0ZDU5NTJiIiwibmJmIjoxNjQxMzcwNTEzLCJzdWIiOiI5Y2YzOWJhMS04ZTg5LTRjYjYtODAyMC02MGU0NzBlZjRiNGIiLCJ0eXAiOiJhY2Nlc3MifQ.D22G3agnvQsvWV3ekmOTM5I_ifKrMGCWZNY_bEh0U83lKt5TWSZTO9k--rou6GPi04v096AhERnwaFjsdZSU4g";

const httpLink = new HttpLink({ uri: URL });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`,
    },
  };
});
const authedHttpLink = authLink.concat(httpLink);
const phoenixSocket = new PhoenixSocket(WSURL, {
  params: () => {
    return { token: TOKEN };
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

export const client = new ApolloClient({
  link,
  cache,
});

// import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
// import * as AbsintheSocket from "@absinthe/socket";
// import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
// import { Socket as PhoenixSocket } from "phoenix";
// import { getMainDefinition } from "@apollo/client/utilities";

// const URL = "https://chat.thewidlarzgroup.com/api/graphiql";
// const WSURL = "wss://chat.thewidlarzgroup.com/socket";
// const TOKEN =
//   "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM3ODk3MTQsImlhdCI6MTY0MTM3MDUxNCwiaXNzIjoiY2hhdGx5IiwianRpIjoiZjk2YjllMWQtMmFiNS00YWM3LTlmZmUtZWEzODc0ZDU5NTJiIiwibmJmIjoxNjQxMzcwNTEzLCJzdWIiOiI5Y2YzOWJhMS04ZTg5LTRjYjYtODAyMC02MGU0NzBlZjRiNGIiLCJ0eXAiOiJhY2Nlc3MifQ.D22G3agnvQsvWV3ekmOTM5I_ifKrMGCWZNY_bEh0U83lKt5TWSZTO9k--rou6GPi04v096AhERnwaFjsdZSU4g";

// const httpLink = new HttpLink({ uri: URL });
// const phoenixSocket = new PhoenixSocket(WSURL, {
//   params: () => ({ token: TOKEN }),
// });
// const absintheSocket = AbsintheSocket.create(phoenixSocket);
// const wsLink = createAbsintheSocketLink(absintheSocket);
// const cache = new InMemoryCache();

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" && definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

// export const client = new ApolloClient({
//   link: splitLink,
//   cache,
// });

// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import * as AbsintheSocket from "@absinthe/socket";
// import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
// import { Socket as PhoenixSocket } from "phoenix";

// const URL = "https://chat.thewidlarzgroup.com/api/graphiql";
// const WSURL = "wss://chat.thewidlarzgroup.com/socket";
// const TOKEN =
//   "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM3ODk3MTQsImlhdCI6MTY0MTM3MDUxNCwiaXNzIjoiY2hhdGx5IiwianRpIjoiZjk2YjllMWQtMmFiNS00YWM3LTlmZmUtZWEzODc0ZDU5NTJiIiwibmJmIjoxNjQxMzcwNTEzLCJzdWIiOiI5Y2YzOWJhMS04ZTg5LTRjYjYtODAyMC02MGU0NzBlZjRiNGIiLCJ0eXAiOiJhY2Nlc3MifQ.D22G3agnvQsvWV3ekmOTM5I_ifKrMGCWZNY_bEh0U83lKt5TWSZTO9k--rou6GPi04v096AhERnwaFjsdZSU4g";

// const phoenixSocket = new PhoenixSocket(WSURL, {
//   params: () => ({ token: TOKEN }),
// });

// const absintheSocket = AbsintheSocket.create(phoenixSocket);
// const link = createAbsintheSocketLink(absintheSocket);
// const cache = new InMemoryCache();
// export const client = new ApolloClient({
//   link,
//   cache,
// });

// import { setContext } from "@apollo/client/link/context";
// import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// const URL = "https://chat.thewidlarzgroup.com/api/graphiql";
// const WSURL = "wss://chat.thewidlarzgroup.com/socket";
// const TOKEN =
//   "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM3ODk3MTQsImlhdCI6MTY0MTM3MDUxNCwiaXNzIjoiY2hhdGx5IiwianRpIjoiZjk2YjllMWQtMmFiNS00YWM3LTlmZmUtZWEzODc0ZDU5NTJiIiwibmJmIjoxNjQxMzcwNTEzLCJzdWIiOiI5Y2YzOWJhMS04ZTg5LTRjYjYtODAyMC02MGU0NzBlZjRiNGIiLCJ0eXAiOiJhY2Nlc3MifQ.D22G3agnvQsvWV3ekmOTM5I_ifKrMGCWZNY_bEh0U83lKt5TWSZTO9k--rou6GPi04v096AhERnwaFjsdZSU4g";

// const httpLink = createHttpLink({
//   uri: URL,
// });
// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${TOKEN}`,
//     },
//   };
// });
// export const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
