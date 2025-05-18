import { gql, useQuery } from '@apollo/client'

interface Location {
	id: string
	name: string
	description: string
	photo: string
}

interface Data {
	locations: Location[]
}

function DisplayLocations() {
	const GET_LOCATIONS = gql`
		query GetLocations {
			locations {
				id
				name
				description
				photo
			}
		}
	`

	const { loading, error, data } = useQuery<Data>(GET_LOCATIONS)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error : {error.message}</p>
	if (!data) return <p>No data available</p>

	return data.locations.map(({ id, name, description, photo }) => (
		<div key={id}>
			<h3>{name}</h3>
			<img width='400' height='250' alt='location-reference' src={photo} />
			<br />
			<b>About this location:</b>
			<p>{description}</p>
			<br />
		</div>
	))
}

export default DisplayLocations
