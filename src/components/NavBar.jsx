import { FaRegMoon, FaInfo } from "react-icons/fa6";
import PropTypes from "prop-types";

function NavBar(props) {
  const isDark = props.isDark;
  const handleToggleDark = props.handleToggleDark;

  return (
    <div className="container">
      <div className="row">
        {/*Column 1 */}
        <div className="col d-flex justify-content-center align-items-center">
          <FaRegMoon
            className="bttn"
            style={{
              color: isDark && "white",
            }}
            onClick={handleToggleDark}
          />
        </div>
        <div className="col col-md-10 d-flex justify-content-center align-items-center pt-2 py-md-3">
          <h1
            className="quicksand"
            style={{
              color: isDark && "white",
            }}
          >
            Example Website
          </h1>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
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
    </div>
  );
}

NavBar.propTypes = {
  isDark: PropTypes.bool,
  handleToggleDark: PropTypes.func,
};

export default NavBar;
