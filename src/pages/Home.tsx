import DemoDiv from "../components/DemoDiv";
import NavigationBar from "../components/NavigationBar";
import StepsDiv from "../components/StepsDiv";
import StickyFooter from "../components/StickyFooter";
import Testimonials from "../components/Testimonials";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DemoDiv></DemoDiv>
      <StepsDiv></StepsDiv>
      <Testimonials></Testimonials>
      <StickyFooter></StickyFooter>
    </div>
  );
};

export default HomePage;
