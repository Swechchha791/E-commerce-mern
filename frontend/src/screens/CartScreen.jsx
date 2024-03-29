import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useParams } from "react-router-dom";
import Message from "../components/Message";
import { Trash3 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Row, Col, Image, Form, ListGroup, Button } from "react-bootstrap";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const qty = location.search
    ? Number(new URLSearchParams(location.search).get("qty"))
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(addToCart(id, qty));
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    if (userInfo) {
      // User is logged in, navigate directly to the shipping page
      navigate("/shipping");
    } else {
      // User is not logged in, redirect to login page with redirect parameter
      navigate("/login?redirect=shipping");
    }
    // navigate(`/login?redirect=shipping`);
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <>
            <Link className="btn btn-dark py-2 my-4" to="/">
              Go Back
            </Link>
            <Message>Your cart is empty </Message>
          </>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row className="d-flex align-items-center py-2">
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                      style={{ height: "7rem", width: "7rem" }}
                    />
                  </Col>
                  <Col md={3}>
                    <Link className="link" to={`/product/${item.product}`}>
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <Trash3 style={{ color: "red", cursor: "pointer" }} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <ListGroup>
          <ListGroup.Item className="py-3">
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            <strong>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </strong>
          </ListGroup.Item>
          <ListGroup.Item className="d-grid">
            <Button
              type="button"
              variant="warning"
              className="btn-block"
              onClick={checkoutHandler}
              disabled={cartItems.length === 0}
            >
              Proceed to checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default CartScreen;
