import {
	ApolloClient,
	ApolloProvider,
	gql,
	InMemoryCache
} from '@apollo/client'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'

const client = new ApolloClient({
	uri: 'https://flyby-router-demo.herokuapp.com/',
	cache: new InMemoryCache()	
})

client
	.query({
		query: gql`
			query GetLocations {
				locations {
					id
					name
					description
					photo
				}
			}
		`
	})
	.then(result => console.log(result))

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</StrictMode>
)
