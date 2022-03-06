import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import styled from "styled-components";
import NavigationBar from "./components/NavigationBar";
import StickyFooter from "./components/StickyFooter";
import DemoDiv from "./components/DemoDiv";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <DemoDiv></DemoDiv>
      <StickyFooter></StickyFooter>
    </div>
  );
}

export default App;
