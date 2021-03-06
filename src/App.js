import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ArrowLeft, ArrowRight } from "phosphor-react";
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
  const intersectionSlideRef = useRef({ x: 2, y: 2 });

  // 紀錄橫向 scroll 位置
  const [hScrollStop, setHScrollStop] = useState(landingSlideRef.current.x);

  // 紀錄垂直 scroll 位置
  const [vScrollStop, setVScrollStop] = useState(landingSlideRef.current.y);

  useEffect(() => {
    jumpToLandingSlide({ gridRef, landingSlideRef, gridSizeRef });
  }, []);

  useEffect(() => {
    showSideArrows({
      hScrollStop,
      vScrollStop,
      leftArrowRef,
      rightArrowRef,
    });
  }, [hScrollStop, vScrollStop]);

  const wheelHandler = (e) => {
    if (hScrollStop !== intersectionSlideRef.current.x) {
      gridRef.current.style.position = "fixed";
      return;
    }
    gridRef.current.style.position = "absolute";
    moveGridVertically(vScrollStop, setVScrollStop, e);
  };

  const clickRightBtnHandler = (e) => {
    if (vScrollStop !== intersectionSlideRef.current.y) {
      return;
    }
    moveGridHorizontally(gridRef, hScrollStop, setHScrollStop, e).toRight();
  };

  const clickLeftBtnHandler = (e) => {
    if (vScrollStop !== intersectionSlideRef.current.y) {
      return;
    }

    moveGridHorizontally(gridRef, hScrollStop, setHScrollStop, e).toLeft();
  };

  return (
    <div className={`${className} App`} onWheel={wheelHandler}>
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
        <button onClick={clickLeftBtnHandler}>
          <ArrowLeft size={32} />
        </button>
      </aside>
      <aside ref={rightArrowRef} className="arrow right-arrow">
        <button onClick={clickRightBtnHandler}>
          <ArrowRight size={32} />
        </button>
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
      border: none;
      background-color: transparent;
    }

    & button:hover {
      box-shadow: 0 0 5px black;
    }
  }
`;

export default App;
