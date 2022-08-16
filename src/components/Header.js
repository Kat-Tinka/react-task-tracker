// use shortCut 'impt' to import PropTypes and...
import PropTypes from "prop-types";

// I you want to use style inline- use double{}-> for example with 'color' , we'll set that to a string of a color / backgroundColor value
const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
// };

// If you don't want to use the inline styling-> just create a variable called 'headingStyle = ..." , paste the defnded style , like colors etc into the {}, delite the double curly Braces in the <h1> and pass 'hedaingStyle' in
const headingStyle = {
  color: "blueviolet",
  backgroundColor: "lightgreen",
};

export default Header;
