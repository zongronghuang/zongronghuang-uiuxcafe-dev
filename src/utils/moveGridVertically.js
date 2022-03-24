import { scrollTo } from "scroll-js";

const moveGridVertically = (vScrollStop, setVScrollStop, e) => {
  const { deltaY } = e;

  const scrollDownOptions = {
    1: () => {
      setVScrollStop((prevVScrollStop) => {
        scrollTo(document.body, {
          top: vScrollStop * window.innerHeight,
        }).then(function () {
          console.log("Down to CENTER SLIDE");
        });
        return prevVScrollStop + 1;
      });
    },
    2: () => {
      setVScrollStop((prevVScrollStop) => {
        scrollTo(document.body, {
          top: vScrollStop * window.innerHeight,
        }).then(function () {
          console.log("Down to BOTTOM SLIDE");
        });
        return prevVScrollStop + 1;
      });
    },
    3: () => {
      setVScrollStop((prevVScrollStop) => {
        return prevVScrollStop + 1;
      });
    },
  };

  const scrollUpOptions = {
    1: () => {
      setVScrollStop((prevVScrollStop) => {
        return prevVScrollStop;
      });
    },
    2: () => {
      setVScrollStop((prevVScrollStop) => {
        scrollTo(document.body, {
          top: (vScrollStop - 2) * window.innerHeight,
        }).then(function () {
          console.log("Up to TOP SLIDE");
        });
        return prevVScrollStop - 1;
      });
    },
    3: () => {
      setVScrollStop((prevVScrollStop) => {
        scrollTo(document.body, {
          top: (vScrollStop - 2) * window.innerHeight,
        }).then(function () {
          console.log("Up to CENTER SLIDE");
        });
        return prevVScrollStop - 1;
      });
    },
  };

  if (deltaY > 30) {
    scrollDownOptions[vScrollStop]();
  }

  if (deltaY < -30) {
    scrollUpOptions[vScrollStop]();
  }
};
export { moveGridVertically };
