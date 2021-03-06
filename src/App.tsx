import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import styled from "styled-components";
import NavigationBar from "./components/NavigationBar";
import StickyFooter from "./components/StickyFooter";
import DemoDiv from "./components/DemoDiv";
import StepsDiv from "./components/StepsDiv";
import Testimonials from "./components/Testimonials";
import { config } from "./config/config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUs from "./pages/Poll_Results";
import AuthRoute from "./components/AuthRoute";
import LoginPage from "./pages/Login";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import SignUp from "./pages/SignUp";
import NewPoll from "./pages/NewPoll";

// get data from firestore
initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="App">
      {/* <NavigationBar></NavigationBar>
      <DemoDiv></DemoDiv>
      <StepsDiv></StepsDiv>
      <Testimonials></Testimonials>
      <StickyFooter></StickyFooter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact_us" element={<NewPoll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
