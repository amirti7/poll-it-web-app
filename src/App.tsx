import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import styled from "styled-components";
import NavigationBar from "./components/NavigationBar";
import StickyFooter from "./components/StickyFooter";
import DemoDiv from "./components/DemoDiv";
import StepsDiv from "./components/StepsDiv";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <DemoDiv></DemoDiv>
      <StepsDiv></StepsDiv>
      <Testimonials></Testimonials>
      <StickyFooter></StickyFooter>
    </div>
  );
}

export default App;
