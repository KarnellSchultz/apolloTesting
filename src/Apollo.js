import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default function Apollo() {
	const POST_QUERY = gql`
		query allPosts {
			posts {
				id
				title
				body
				createdAt
			}
		}
	`;
	const { loading, error, data } = useQuery(POST_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	if (data)
		return data.posts.map(post => {
			return (
				<div>
					<h3>{post.title}</h3>
					<h4>{post.body}</h4>
				</div>
			);
		});
}
