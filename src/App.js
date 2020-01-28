import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import Apollo from './Apollo';

const client = new ApolloClient({
	uri: 'https://api-euwest.graphcms.com/v1/ck5xurgaz2vik01fghe9ce6g6/master',
});

const POST_QUERY = gql`
	{
		posts {
			id
			title
			body
			createdAt
		}
	}
`;

// client
// 	.query({
// 		query: testQuery,
// 	})
// 	.then(result => console.log(result.data));
// example of running a query from outside of react

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />

					<Apollo> </Apollo>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		</ApolloProvider>
	);
}

export default App;
