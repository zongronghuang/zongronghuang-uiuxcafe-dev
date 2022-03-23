import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import "./App.css";
import CardA from "./components/Cards/CardA";
import CardB from "./components/Cards/CardB";
import Slide from "./components/Slides/general/Slide";
import GridView from "./views/GridView";
import { jumpToLandingSlide } from "./utils/jumptToLandingSlide";
import { moveGridVertically } from "./utils/moveGridVertically";
import { moveGridHorizontally } from "./utils/moveGridHorizontally";
import { showSideArrows } from "./utils/showSideArrows";

function AppJSX({ className }) {
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();
  const gridRef = useRef();
  // 投影片 grid 的欄數和列數
  const gridSizeRef = useRef({ cols: 3, rows: 3 });
  // 標記使用者會看到的第一張投影片的座標
  const landingSlideRef = useRef({ x: 2, y: 1 });

  // 紀錄橫向 scroll 位置
  const [hScrollStop, setHScrollStop] = useState(landingSlideRef.current.x);

  // 紀錄垂直 scroll 位置
  const [vScrollStop, setVScrollStop] = useState(landingSlideRef.current.y);

  useEffect(() => {
    jumpToLandingSlide({ gridRef, landingSlideRef, gridSizeRef });
  }, []);

  useEffect(() => {
    showSideArrows({ hScrollStop, vScrollStop, leftArrowRef, rightArrowRef });
  }, [hScrollStop, vScrollStop]);

  return (
    <div
      className={`${className} App`}
      onWheel={(e) => moveGridVertically(vScrollStop, setVScrollStop, e)}
    >
      <GridView ref={gridRef}>
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
      </GridView>

      <aside ref={leftArrowRef} className="arrow left-arrow">
        <button>Left</button>
      </aside>
      <aside ref={rightArrowRef} className="arrow right-arrow">
        <button>Left</button>
      </aside>
    </div>
  );
}

const App = styled(AppJSX)`
  .arrow {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.3);
    visibility: hidden;

    &.left-arrow {
      top: 0;
      left: 0;
    }

    &.right-arrow {
      top: 0;
      right: 0;
    }

    & button {
      width: 100%;
      height: 20%;
    }
  }
`;

export default App;
