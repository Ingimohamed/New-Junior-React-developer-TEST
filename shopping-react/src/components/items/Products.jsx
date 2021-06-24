import React from "react";
import { useQuery, gql } from "@apollo/client";

const NAME_QUERY = gql`
{
    category{
      products{
        name
        prices{
            amount
          }
      }
    }
  }
`;

export default function Products() {
  const { data, loading, error } = useQuery(NAME_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <div>
        {data.category.products.map((product) => (
          <div className="grid_items">
            <div className="card">
             
              <div className="card_text">
                <figcaption key={product.name} className="item_name">
                  {product.name}
                        </figcaption>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}