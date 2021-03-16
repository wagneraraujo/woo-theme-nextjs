import { ApolloProvider } from "@apollo/client";
import "../styles/style.css";
import client from "../components/apollo/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
