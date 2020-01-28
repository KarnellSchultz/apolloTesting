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

	const SPACE_X = gql`
		query spacex {
			launches {
				launch_year
				mission_name
				mission_id
				rocket {
					rocket_name
					rocket_type
				}
				telemetry {
					flight_club
				}
			}
		}
	`;

	const SPACE_X2 = gql`
		query missionResult {
			missionsResult {
				data {
					name
					id
					description
					website
				}
			}
		}
	`;
	const { loading, error, data } = useQuery(SPACE_X2);

	if (loading) {
		console.log(loading);
		return <p>Loading...</p>;
	}
	if (error) {
		console.log(error);
		return <p>Error :( </p>;
	}
	if (data) {
		return data.missionsResult.data.map(result => {
			return (
				<div key={result.name + result.id}>
					<h3>{result.name}</h3>
					<p>{result.description}</p>
					<button> {result.website} </button>
				</div>
			);
		});
	}
}
