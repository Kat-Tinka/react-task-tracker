const Header = ({ title }) => {
  return (
    <header>
      <h1>Task Tracker</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
