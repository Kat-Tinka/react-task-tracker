import { upload } from "@testing-library/user-event/dist/upload";

// We can destructure and clean this a bit up, by putting instead of "props" in the const Header whatever you want to pass in -> for Example by adding {}and taking in the 'title' and just call 'title ' in the <h1>

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
