import { useEffect, useRef } from "react";
import "./App.css";
import CardA from "./components/Cards/CardA";
import CardB from "./components/Cards/CardB";
import Slide from "./components/Slides/general/Slide";
import SlideView from "./views/SlideView";

function App() {
  const viewRef = useRef();

  useEffect(() => {
    const step = 100;
    const stepUnit = "vw";
    const currentLeft = viewRef.current.style.left;

    viewRef.current.style.left = currentLeft - step + stepUnit;
  }, []);

  return (
    <div className="App">
      {/* <CardA /> */}

      {/* <CardB /> */}
      <SlideView ref={viewRef}>
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
