import React from "react";
import { useQuery, gql } from "@apollo/client";
import { NavLink } from "react-router-dom";

const NAME_QUERY = gql`
  query {
    category(input: { title: "clothes" }) {
      products {
        name
        category
        gallery
        inStock
        description
        prices {
          currency
          amount
        }
        attributes {
          items {
            value
          }
        }
      }
    }
  }
`;

export default function Products() {
  const { data, loading, error } = useQuery(NAME_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <div className="container">
        <h1 className="title">Category Name</h1>
        <div className="grid_items">
          {data.category.products.map((product) => (
            <div
              className={
                product.inStock === true ? "card" : "card card_disabled"
              }
            >
              <div className="img_div">
                <NavLink to="/pdp">
                   <img className="card_img" src={product.gallery[0]} alt="item" />
                </NavLink>
              </div>

              <div className="card_text">
                <figcaption key={product.name} className="item_name">
                  {product.name}
                </figcaption>
                <div>{product.prices[0].amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
