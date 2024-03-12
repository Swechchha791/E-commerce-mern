import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

function Product({ product }) {
  return (
    <>
      <Card className="my-4 rounded product_card">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            className="py-4 px-2"
            style={{ height: "13rem", width: "12rem" }}
          />
        </Link>
        <Card.Body>
          <Link className="link" to={`/product/${product._id}`}>
            <Card.Title as="div">{product.name}</Card.Title>
          </Link>
          <Card.Text as="div">
            {/* <div className="my-3">
              Rating {product.rating} from {product.numReviews} Reviews.
            </div> */}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h4">
            <div className="my-2">{product.price}</div>
          </Card.Text>
          {/* <Card.Text as="div" className="d-grid">
            <Button variant="warning" size="md">
              Add to cart
            </Button>
          </Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
