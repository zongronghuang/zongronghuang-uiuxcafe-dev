import styled from "@emotion/styled";

const SlideJSX = ({
  className,
  children,
  bgColor,
  xCoordinate,
  yCoordinate,
  startSlide,
}) => {
  return (
    <article
      className={`${className} ${bgColor} col-${xCoordinate} row-${yCoordinate} ${
        startSlide ? "focus" : ""
      }`}
    >
      <h1 className="title">{children}</h1>
    </article>
  );
};

const Slide = styled(SlideJSX)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  &.bg-yellow {
    background-color: gold;
  }

  &.bg-pink {
    background-color: pink;
  }

  &.bg-green {
    background-color: mediumseagreen;
  }

  &.bg-blue {
    background-color: dodgerblue;
  }

  &.bg-gray {
    background-color: lightgray;
  }

  &.bg-red {
    background-color: tomato;
  }

  &.col-1 {
    grid-column: 1 / 2;
  }
  &.col-2 {
    grid-column: 2 / 3;
  }
  &.col-3 {
    grid-column: 3 / 4;
  }

  &.row-1 {
    grid-row: 1 / 2;
  }
  &.row-2 {
    grid-row: 2 / 3;
  }
  &.row-3 {
    grid-row: 3 / 4;
  }
`;

export default Slide;
