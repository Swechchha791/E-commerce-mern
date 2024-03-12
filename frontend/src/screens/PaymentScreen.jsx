import React, { useState } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setSetPaymentMethod] = useState("Paypal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Card className="card px-5 py-4 my-5">
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="py-2">
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Paypal or Credit Card"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                onChange={(e) => setSetPaymentMethod(e.target.value)}
                checked
              ></Form.Check>

              <Form.Check
                type="radio"
                label="G-pay"
                id="G-pay"
                name="paymentMethod"
                value="G-pay"
                onChange={(e) => setSetPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button type="submit" variant="warning" className="mt-3">
            Continue
          </Button>
        </Form>
      </Card>
    </FormContainer>
  );
};

export default PaymentScreen;
