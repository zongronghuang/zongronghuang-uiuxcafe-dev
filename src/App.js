import { useEffect, useRef } from "react";
import "./App.css";
import CardA from "./components/Cards/CardA";
import CardB from "./components/Cards/CardB";
import Slide from "./components/Slides/general/Slide";
import SlideView from "./views/SlideView";
import { jumpToLandingSlide } from "./utils/jumptToLandingSlide";

function App() {
  const gridRef = useRef();
  // 投影片 grid 的欄數和列數
  const gridSizeRef = useRef({ cols: 3, rows: 3 });
  // 標記使用者會看到的第一張投影片的座標
  const landingSlideRef = useRef({ x: 2, y: 3 });

  useEffect(() => {
    jumpToLandingSlide({ gridRef, landingSlideRef, gridSizeRef });
  }, []);

  return (
    <div className="App">
      <SlideView ref={gridRef}>
        <Slide xCoordinate="2" yCoordinate="1" bgColor="bg-blue">
          Go down
        </Slide>
        <Slide xCoordinate="2" yCoordinate="2" bgColor="bg-green">
          <CardA />
        </Slide>
        <Slide xCoordinate="2" yCoordinate="3" bgColor="bg-yellow">
          <CardB />
        </Slide>
        <Slide xCoordinate="1" yCoordinate="2" bgColor="bg-red">
          Go right
        </Slide>
        <Slide xCoordinate="3" yCoordinate="2" bgColor="bg-gray">
          Go left
        </Slide>
      </SlideView>
    </div>
  );
}

export default App;
