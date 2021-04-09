import close from "./images/closeBurgerMenu.svg";

const SideNav = ({ isSideNavRequested, setIsSideNavRequested }) => {
  return (
    <div
      onBlur={() => {
        setIsSideNavRequested(false);
      }}
      className={isSideNavRequested ? "side-nav active" : "side-nav"}
    >
      <img
        style={{ float: "right" }}
        src={close}
        width="40px"
        alt="Close Menu"
        onClick={() => {
          setIsSideNavRequested(false);
        }}
      />
      hello
    </div>
  );
};
export default SideNav;
