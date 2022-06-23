import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oibv0505jm01xxhdvdckfm/master',
  cache: new InMemoryCache()
})