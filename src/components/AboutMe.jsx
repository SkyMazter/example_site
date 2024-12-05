import PropTypes from "prop-types";
import Body_Text from "./Body_Text";

function AboutMe(props) {
  const isDark = props.isDark;
  const textStyle = { color: isDark && "white" };

  return (
    <div>
      <h1 className="quicksand" style={textStyle}>
        <Body_Text isDark={isDark} />
      </h1>
    </div>
  );
}

AboutMe.propTypes = {
  isDark: PropTypes.bool,
};

export default AboutMe;
