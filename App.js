import { App } from "./src";
import { useFonts } from "@use-expo/font";
import { FONTS } from "./style/fonts";
import { View, Text } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const URL = "https://chat.thewidlarzgroup.com/api/graphiql";
const WSURL = "wss://chat.thewidlarzgroup.com/socket";
const TOKEN =
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM3ODk3MTQsImlhdCI6MTY0MTM3MDUxNCwiaXNzIjoiY2hhdGx5IiwianRpIjoiZjk2YjllMWQtMmFiNS00YWM3LTlmZmUtZWEzODc0ZDU5NTJiIiwibmJmIjoxNjQxMzcwNTEzLCJzdWIiOiI5Y2YzOWJhMS04ZTg5LTRjYjYtODAyMC02MGU0NzBlZjRiNGIiLCJ0eXAiOiJhY2Nlc3MifQ.D22G3agnvQsvWV3ekmOTM5I_ifKrMGCWZNY_bEh0U83lKt5TWSZTO9k--rou6GPi04v096AhERnwaFjsdZSU4g";

const httpLink = createHttpLink({
  uri: URL,
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default () => {
  const [isLoaded] = useFonts(FONTS);

  if (!isLoaded)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
