import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '@lib/init-apollo';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
