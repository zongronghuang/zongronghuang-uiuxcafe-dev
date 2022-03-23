export const showSideArrows = ({
  hScrollStop,
  vScrollStop,
  leftArrowRef,
  rightArrowRef,
}) => {
  if (vScrollStop !== 2) {
    leftArrowRef.current.style.visibility = "hidden";
    rightArrowRef.current.style.visibility = "hidden";
    return;
  }

  if (hScrollStop === 2) {
    leftArrowRef.current.style.visibility = "visible";
    rightArrowRef.current.style.visibility = "visible";
  }

  if (hScrollStop === 1) {
    leftArrowRef.current.style.visibility = "hidden";
    rightArrowRef.current.style.visibility = "visible";
  }

  if (hScrollStop === 3) {
    leftArrowRef.current.style.visibility = "visible";
    rightArrowRef.current.style.visibility = "hidden";
  }
};
