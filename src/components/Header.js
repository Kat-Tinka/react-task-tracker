// use shortCut 'impt' to import PropTypes and...
import PropTypes from "prop-types";

// I you want to use style inline- use double{}-> for example with 'color' , we'll set that to a string of a color / backgroundColor value
const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{ color: "blueviolet", backgroundColor: "lightgreen" }}>
        {title}
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
