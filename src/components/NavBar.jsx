import { FaRegMoon, FaInfo } from "react-icons/fa6";
import PropTypes from "prop-types";

function NavBar(props) {
  const isDark = props.isDark;
  const handleToggleDark = props.handleToggleDark;

  return (
    <div
      className="row"
      style={{
        justifyContent: "space-between",
        marginLeft: "15px",
        marginRight: "15px",
      }}
    >
      {/*Column 1 */}
      <div className="col">
        <FaRegMoon
          className="bttn"
          style={{
            color: isDark && "white",
          }}
          onClick={handleToggleDark}
        />
      </div>
      {/* <button onClick={handleToggleDark}>Set Dark Mode</button> */}
      <div className="col">
        <h1
          className="quicksand"
          style={{
            color: isDark && "white",
          }}
        >
          Example Website
        </h1>
      </div>
      <div className="col">
        <FaInfo
          className="bttn"
          style={{
            color: isDark && "white",
          }}
          onClick={() => {
            alert(isDark);
          }}
        />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  isDark: PropTypes.bool,
  handleToggleDark: PropTypes.func,
};

export default NavBar;
