import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const cityQuery = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      weather
    }
  }
`;

export const Home = ({}) => {
  const { data } = useQuery(cityQuery, {
    variables: {
      name: "Salt Lake City"
    }
  });
  console.log({ data });
  return <div>Hello</div>;
};
