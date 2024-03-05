import React, { useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cart3 } from "react-bootstrap-icons";
import { Basket2Fill } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { BoxArrowUp } from "react-bootstrap-icons";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  // Load user information from local storage when the component mounts
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: JSON.parse(storedUserInfo),
      });
    }
  }, [dispatch]);

  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container className="py-2">
          <Navbar.Brand
            className="text-warning d-flex align-items-center"
            style={{ fontWeight: "bold" }}
            as={Link}
            to="/"
          >
            <Basket2Fill className="mx-2" />
            Shop-at-home
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link as={Link} to="/cart">
                <Cart3 />
                <span className="px-1">Cart</span>
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Nav.Link as={Link} to="/profile">
                    <NavDropdown.Item>
                      <PersonCircle />
                      <span className="px-1">Profile</span>
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link as={Link}>
                    <NavDropdown.Item onClick={logoutHandler}>
                      <BoxArrowUp />
                      <span className="px-1">Logout</span>
                    </NavDropdown.Item>
                  </Nav.Link>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <PersonCircle />
                  <span className="px-1">Sign in</span>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// import React from "react";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { Cart3 } from "react-bootstrap-icons";
// import { Basket2Fill } from "react-bootstrap-icons";
// import { PersonCircle } from "react-bootstrap-icons";
// import { BoxArrowUp } from "react-bootstrap-icons";
// import { logout } from "../actions/userActions";

// const Header = () => {
//   const dispatch = useDispatch();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header>
//       <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
//         <Container className="py-2">
//           <Navbar.Brand
//             className="text-warning d-flex align-items-center"
//             style={{ fontWeight: "bold" }}
//             as={Link}
//             to="/"
//           >
//             <Basket2Fill className="mx-2" />
//             Shop-at-home
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto ">
//               <Nav.Link as={Link} to="/cart">
//                 <Cart3 />
//                 <span className="px-1">Cart</span>
//               </Nav.Link>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id="username">
//                   <Nav.Link as={Link} to="/profile">
//                     <NavDropdown.Item>
//                       <PersonCircle />
//                       <span className="px-1">Profile</span>
//                     </NavDropdown.Item>
//                   </Nav.Link>
//                   <Nav.Link as={Link}>
//                     <NavDropdown.Item onClick={logoutHandler}>
//                       <BoxArrowUp />
//                       <span className="px-1">Logout</span>
//                     </NavDropdown.Item>
//                   </Nav.Link>
//                 </NavDropdown>
//               ) : (
//                 <Nav.Link as={Link} to="/login">
//                   <PersonCircle />
//                   <span className="px-1">Sign in</span>
//                 </Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
