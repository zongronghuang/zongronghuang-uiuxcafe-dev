import { scrollTo } from "scroll-js";

const moveGridHorizontally = (gridRef, hScrollStop, setHScrollStop, e) => {
  // left
  // h - 1
  const root = document.querySelector("html");

  root.style.overflowX = "scroll";

  const shiftLeftOptions = {
    1: () => {
      return;
    },
    2: () => {
      setHScrollStop((prevHScrollStop) => {
        // scrollTo(document.body, {
        //   left: (hScrollStop - 1) * window.innerWidth,
        //   top: 1 * window.innerHeight,
        // }).then(function () {
        //   console.log("Left to LEFT SLIDE");
        // });
        gridRef.current.style.left = "0";

        return prevHScrollStop - 1;
      });
    },
    3: () => {
      setHScrollStop((prevHScrollStop) => {
        // scrollTo(document.body, {
        //   left: (hScrollStop - 1) * window.innerWidth,
        //   top: 1 * window.innerHeight,
        // }).then(function () {
        //   console.log("Left to CENTER SLIDE");
        // });
        gridRef.current.style.left = "-100vw";

        return prevHScrollStop - 1;
      });
    },
  };

  const shiftRightOptions = {
    1: () => {
      setHScrollStop((prevHScrollStop) => {
        //   scrollTo(document.body, {
        //     left: hScrollStop * window.innerWidth,
        //     top: 1 * window.innerHeight,
        //   }).then(function () {
        //     console.log("Right to CENTER SLIDE");
        //   });
        gridRef.current.style.left = "-100vw";

        return prevHScrollStop + 1;
      });
    },
    2: () => {
      setHScrollStop((prevHScrollStop) => {
        // scrollTo(document.body, {
        //   left: hScrollStop * window.innerWidth,
        //   top: 1 * window.innerHeight,
        // }).then(function () {
        //   console.log("Right to RIGHT SLIDE");
        // });

        gridRef.current.style.left = "-200vw";
        return prevHScrollStop + 1;
      });
    },
    3: () => {
      return;
    },
  };

  return {
    toRight: () => {
      shiftRightOptions[hScrollStop]();
    },
    toLeft: () => {
      shiftLeftOptions[hScrollStop]();
    },
  };
  // right
  // h + 1
};

export { moveGridHorizontally };
