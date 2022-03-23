const jumpToLandingSlide = ({ gridRef, landingSlideRef, gridSizeRef }) => {
  const step = 100;
  const vw = "vw";
  const vh = "vh";
  const { x, y } = landingSlideRef.current;
  const { cols, rows } = gridSizeRef.current;
  const validSlideCoordinates = x <= cols && y <= rows && x >= 1 && y >= 1;

  console.log({ x, y, rows, cols });

  if (!validSlideCoordinates) {
    throw new Error("The landing slide does not exist");
  }

  const newLeft = step * -(x - 1) + vw;
  const newTop = step * -(y - 1) + vh;

  gridRef.current.style.left = newLeft;
  gridRef.current.style.top = newTop;
};

export { jumpToLandingSlide };
