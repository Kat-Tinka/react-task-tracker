import PropTypes from "prop-types";
import Button from "./Button";

// I you want to use style inline- use double{}-> for example with color , we will set that to a string of a color/backgroundColor value

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// Be aware of typo errors: we used the name PropTypes but in Header.propTypes -> teh firtst letter has to be small
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS:
// If you don't want to use the inline styling-> just create a variable called 'headingStyle = ..." , paste the defnded style, like colors etc into the {}, delite the double curly Braces in the <h1> and pass 'headingStyle' in _ that can be used in a dynamic styling( so for now I#ll change it back)

// const headingStyle = {
//   color: "blueviolet",
//   backgroundColor: "lightgreen",
// };

export default Header;
