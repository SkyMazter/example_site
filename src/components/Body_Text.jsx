import "../App.css";
import PropTypes from "prop-types";

function Body_Text(props) {
  const isDark = props.isDark;
  // const textStyle = { color: isDark && "white" };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Title Name</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
            fringilla ornare himenaeos eget leo rhoncus cras. Eros tortor
            accumsan ornare felis semper est conubia. Pulvinar phasellus
            condimentum blandit ipsum conubia faucibus. Tempus iaculis duis
            ornare egestas pharetra cursus est etiam. Proin proin donec
            vulputate ornare nostra. Lorem ipsum odor amet, consectetuer
            adipiscing elit. Hendrerit fringilla ornare himenaeos eget leo
            rhoncus cras. Eros tortor accumsan ornare felis semper est conubia.
            Pulvinar phasellus condimentum blandit ipsum conubia faucibus.
            Tempus iaculis duis ornare egestas pharetra cursus est etiam. Proin
            proin donec vulputate ornare nostra. Lorem ipsum odor amet,
            consectetuer adipiscing elit. Hendrerit fringilla ornare himenaeos
            eget leo rhoncus cras. Eros tortor accumsan ornare felis semper est
            conubia. Pulvinar phasellus condimentum blandit ipsum conubia
            faucibus. Tempus iaculis duis ornare egestas pharetra cursus est
            etiam. Proin proin donec vulputate ornare nostra.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
            fringilla ornare himenaeos eget leo rhoncus cras. Eros tortor
            accumsan ornare felis semper est conubia. Pulvinar phasellus
            condimentum blandit ipsum conubia faucibus. Tempus iaculis duis
            ornare egestas pharetra cursus est etiam. Proin proin donec
            vulputate ornare nostra. Lorem ipsum odor amet, consectetuer
            adipiscing elit. Hendrerit fringilla ornare himenaeos eget leo
            rhoncus cras. Eros tortor accumsan ornare felis semper est conubia.
            Pulvinar phasellus condimentum blandit ipsum conubia faucibus.
            Tempus iaculis duis ornare egestas pharetra cursus est etiam. Proin
            proin donec vulputate ornare nostra. Lorem ipsum odor amet,
            consectetuer adipiscing elit. Hendrerit fringilla ornare himenaeos
            eget leo rhoncus cras. Eros tortor accumsan ornare felis semper est
            conubia. Pulvinar phasellus condimentum blandit ipsum conubia
            faucibus. Tempus iaculis duis ornare egestas pharetra cursus est
            etiam. Proin proin donec vulputate ornare nostra.
          </p>
        </div>

        <div className="col">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
            fringilla ornare himenaeos eget leo rhoncus cras. Eros tortor
            accumsan ornare felis semper est conubia. Pulvinar phasellus
            condimentum blandit ipsum conubia faucibus. Tempus iaculis duis
            ornare egestas pharetra cursus est etiam. Proin proin donec
            vulputate ornare nostra. Lorem ipsum odor amet, consectetuer
            adipiscing elit. Hendrerit fringilla ornare himenaeos eget leo
            rhoncus cras. Eros tortor accumsan ornare felis semper est conubia.
            Pulvinar phasellus condimentum blandit ipsum conubia faucibus.
            Tempus iaculis duis ornare egestas pharetra cursus est etiam. Proin
            proin donec vulputate ornare nostra. Lorem ipsum odor amet,
            consectetuer adipiscing elit. Hendrerit fringilla ornare himenaeos
            eget leo rhoncus cras. Eros tortor accumsan ornare felis semper est
            conubia. Pulvinar phasellus condimentum blandit ipsum conubia
            faucibus. Tempus iaculis duis ornare egestas pharetra cursus est
            etiam. Proin proin donec vulputate ornare nostra.
          </p>
        </div>
      </div>
    </div>
  );
}

Body_Text.propTypes = {
  isDark: PropTypes.bool,
};

export default Body_Text;
