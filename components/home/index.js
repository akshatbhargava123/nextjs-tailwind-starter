import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export default () => {
	const { loading, data } = useQuery(gql`{
		user {
			id
		}
	}`);
	if (loading) return 'Loading...';
	console.log(data);
	return <h1 className="flex justify-center text-orange-500 text-4xl font-black">Welcome to JunoPact</h1>;
};
