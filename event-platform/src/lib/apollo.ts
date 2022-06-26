import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})

// export const client = new ApolloClient({
//   uri: "https://api-sa-east-1.graphcms.com/v2/cl4oibv0505jm01xxhdvdckfm/master",
//   headers: {
//     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxOTU5ODAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9pYnYwNTA1am0wMXh4aGR2ZGNrZm0vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzVlYjQxM2MtYjhkMy00MWMwLTg3ZmMtYTM5ODM4ZjI3NTBkIiwianRpIjoiY2w0dWdicGtiMHVjdzAxdGE1MGNkNDJtaCJ9.Erbil0vxjmBIlzGBPb4htLj4b0rt_Zic_jm7lgsldvFtCKUfKb0NLUT4O7Ruee7pBq3nKG7YYOMp1xFpuiq_bRQ_LSepSJFiQ8tRhEsiCWMYsFVES7B0HMpCBM_6YXPd44lDGhdJQoNTMZmw9E-K3EdJ8yyvmkdtnJEx93RhShYxLM25F1i4leFfRJJa_B19tmYNF3MrkeeQCJGkZoB4LwhiNE5MtYegrNcb9rqbvE0BqitY1a289Ztfue_2WrllTKjkxIn5MU1Gg7KAQCzwXJkaC-e7UjsJP9XPFZrAxHLxIMAkPuEHw8EaOWQYUzOpIY59jYEZKXbUZXHSqeATE1lGhgyaM7LE0lFsqMduL_hjDtbnlqvMOJJcAX0hOQiQsu3yBFjxTTvwcAu4vUz_HTwmTOtY3gb8grXeCkZVfqYxfJ8Vw_L98ZuaOFSSfv41Jp63VhxyLwID7zvwd_FY188HPEYYUW3vcBN0fzQOGguoBVk1jtlVhjuJgEVTkBQVornhPKqXuh51TUxBpCLPfAEvlpk6XDydu-6uXLoSDJKyd5kQ5fyKv6Ffh_dq7aKc6FPuKbJChKE_n5Q3XChHPaT42H-ohwzi6bDiumaIw6woGKWpm7_-uG6BclJN7ghlO2MuWK2JDWpv2MtGR4BmzLgBbuEePN19rUGq-LRWS2I'
//   },
//   cache: new InMemoryCache()
// })