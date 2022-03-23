const jumpToLandingSlide = ({ gridRef, landingSlideRef, gridSizeRef }) => {
  const step = 100;
  const xStepUnit = "vw";
  const yStepUnit = "vh";
  const { left: currentLeft, top: currentTop } = gridRef.current.style;
  const { x, y } = landingSlideRef.current;
  const { cols, rows } = gridSizeRef.current;
  const validSlideCoordinates = x <= cols && y <= rows && x > 1 && y > 1;

  if (!validSlideCoordinates) {
    throw new Error("The landing slide does not exist");
  }

  const newLeft = Number(currentLeft) - step * (x - 1) + xStepUnit;
  const newTop = Number(currentTop) - step * (y - 1) + yStepUnit;

  gridRef.current.style.left = newLeft;
  gridRef.current.style.top = newTop;
};

export { jumpToLandingSlide };
