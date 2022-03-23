import { forwardRef } from "react";
import styled from "@emotion/styled";

const GridViewJSX = forwardRef(({ className, children }, ref) => {
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

const GridView = styled(GridViewJSX)`
  position: absolute;
  display: grid;
  grid-template-rows: 3;
  grid-template-columns: 3;
  width: 100vw;
  height: 100vh;
  transition: all 1s;

  &.down-step-0 {
    transform: translateY(0%);
  }

  &.down-step-1 {
    transform: translateY(100vw);
  }

  &.down-step-2 {
    transform: translateY(200vw);
  }
`;

export default GridView;
