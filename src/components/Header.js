// use shortCut 'impt' to import PropTypes and...
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// Header.defaultProps = {
//   title: "Task Tracker",
// };

// ...and because we know , that we have a title, we use 'title' and we want to create a type of string-> now pass in the <Header/> of App.js 'title={1}-> '1'will be visible, but we will get an error/ warning
when;
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
