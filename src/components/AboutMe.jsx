import Body_Text from "./Body_Text";
import landscape from "../assets/landscape.jpg";

function AboutMe() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {" "}
          <img
            className="rounded my-3"
            style={{
              width: "100%",
              height: "70vh",
            }}
            src={landscape}
          />
        </div>
      </div>
      <Body_Text />
    </div>
  );
}

export default AboutMe;
