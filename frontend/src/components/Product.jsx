import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

function Product({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            {/* <div className="my-3">
              Rating {product.rating} from {product.numReviews} Reviews.
            </div> */}
            <Rating
              value={product.rating}
              Text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3">
            <div className="my-3">{product.price}</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-grid">
          <Button variant="warning" size="lg">
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Product;
