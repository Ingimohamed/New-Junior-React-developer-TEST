import React from "react";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
{
  currencies
}
`;

export default function Currencies() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <ul>
        {data.currencies.map((currency) => (
          <li key={currency}>{currency}</li>
        ))}
      </ul>
    </div>
  );
}