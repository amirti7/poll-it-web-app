import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import StickyFooter from "../components/StickyFooter";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

interface Props {}

const NewPoll: React.FC<Props> = (props) => {
  const [pollName, setPollName] = useState("");
  return (
    <div>
      <NavigationBar />
      <div>
        <h4>Poll Name:</h4>
        <input
          type="text"
          value={pollName}
          onChange={(e) => setPollName(e.target.value)}
        ></input>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Question Type:
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <StickyFooter />
    </div>
  );
};

export default NewPoll;
