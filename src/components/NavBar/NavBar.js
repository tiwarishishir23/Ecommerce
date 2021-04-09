import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import cartImage from "./images/shoppingCart.svg";
import burgerMenu from "./images/burgerMenu.svg";
import SideNav from "./SideNav";

const NavBar = () => {
  const [isSideNavRequested, setIsSideNavRequested] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const resizeHandler = () => {
    setInnerWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });
  return (
    <div id="nav-container">
      <SideNav
        isSideNavRequested={isSideNavRequested}
        setIsSideNavRequested={setIsSideNavRequested}
      />
      {((innerWidth < 700 && innerWidth > 450) || innerWidth < 376) && (
        <img
          style={{
            boxSizing: "border-box",
            padding: "15px",
          }}
          width="60px"
          onClick={() => {
            setIsSideNavRequested(true);
          }}
          src={burgerMenu}
          alt=""
        />
      )}

      <div style={{ height: "100%", display: "flex" }}>
        <img
          style={{ boxSizing: "border-box", padding: "10px" }}
          src={Logo}
          height="100%"
          alt="logo"
        />
        <p
          style={{
            margin: "0px",
            fontSize: "19px",
            padding: "0",
            alignSelf: "center",
            color: "rgb(116, 116, 116)",
          }}
        >
          Shopped
        </p>
      </div>

      <ul
        id="main-buttons"
        style={
          innerWidth > 476
            ? {
                position: "fixed",
                right: innerWidth < 700 ? "0%" : "",
                left: innerWidth >= 700 ? "25%" : "",
              }
            : {
                backgroundColor: "white",
                position: "fixed",
                width: "100%",
                bottom: "0",
                justifyContent: "space-around",
              }
        }
      >
        <li>
          <Link className="nav-links" to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/products">
            <p>Products</p>
          </Link>
        </li>
      </ul>
      {(innerWidth < 450 || innerWidth > 700) && innerWidth > 376 && (
        <ul id="other-buttons" style={{ position: "fixed", right: "10px" }}>
          <li style={{ height: "100%" }}>
            <Link style={{ display: "flex" }} className="nav-links" to="/cart">
              <img id="my-cart" src={cartImage} alt="My Cart" />
              <div
                style={{
                  clipPath: "circle(12px)",
                  backgroundColor: "rgb(32, 134, 230)",
                  padding: "5px",
                  color: "white",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "-20px",
                }}
              >
                17
              </div>
            </Link>
          </li>
          <li style={{ height: "100%" }}>
            <Link style={{ display: "flex" }} className="nav-links" to="/login">
              <p>Login /Sign up</p>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default NavBar;
