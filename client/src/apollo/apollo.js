import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext as ST } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
	uri: 'http://localhost:3800/'
})

const authLink = ST((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token')
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}
})

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
	connectToDevTools: true
})
