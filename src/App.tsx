import "./styles.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { Home } from "./Home";

const httpLink = createHttpLink({
  uri: `https://graphql-weather-api.herokuapp.com/`
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
