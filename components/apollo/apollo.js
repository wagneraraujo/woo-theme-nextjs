import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";

const defaultOptions = {
  credentials: "same-origin",
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  }
};

const cache = new InMemoryCache({
  resultCaching: false
});
const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS}/graphql/`
});

const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
  defaultOptions
});

export default client;
