const moveGridVertically = (vScrollStop, setVScrollStop, e) => {
  const { deltaY } = e;

  const scrollDownOptions = {
    1: () => {
      setVScrollStop((prevVScrollStop) => {
        // console.log("DOWN stop 1", "stop", prevVScrollStop);
        window.scrollTo({
          top: 1 * window.innerHeight,
          behavior: "smooth",
        });
        return prevVScrollStop + 1;
      });
    },
    2: () => {
      setVScrollStop((prevVScrollStop) => {
        // console.log("DOWN stop 2", "stop", prevVScrollStop);
        window.scrollTo({
          top: 2 * window.innerHeight,
          behavior: "smooth",
        });
        return prevVScrollStop + 1;
      });
    },
    3: () => {
      setVScrollStop((prevVScrollStop) => {
        // console.log("DOWN stop 3", "stop", prevVScrollStop);
        return prevVScrollStop;
      });
    },
  };

  const scrollUpOptions = {
    1: () => {
      setVScrollStop((prevVScrollStop) => {
        // console.log("UP stop 1", "stop", prevVScrollStop);
        window.scrollTo({
          top: 0 * window.innerHeight,
          behavior: "smooth",
        });
        return prevVScrollStop;
      });
    },
    2: () => {
      setVScrollStop((prevVScrollStop) => {
        // console.log("UP stop 2", "stop", prevVScrollStop);
        window.scrollTo({
          top: 1 * window.innerHeight,
          behavior: "smooth",
        });
        return prevVScrollStop - 1;
      });
    },
    3: () => {
      setVScrollStop((prevVScrollStop) => {
        // console.log("UP stop 3", "stop", prevVScrollStop);
        window.scrollTo({
          top: 2 * window.innerHeight,
          behavior: "smooth",
        });
        return prevVScrollStop - 1;
      });
    },
  };

  if (deltaY > 100) {
    scrollDownOptions[vScrollStop]();
  }

  if (deltaY < -80) {
    scrollUpOptions[vScrollStop]();
  }
};
export { moveGridVertically };
