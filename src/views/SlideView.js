import { forwardRef } from "react";
import styled from "@emotion/styled";

const SlideViewJSX = forwardRef(({ className, children }, ref) => {
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

const SlideView = styled(SlideViewJSX)`
  position: absolute;
  display: grid;
  grid-template-rows: 3;
  grid-template-columns: 3;
  width: 100vw;
  height: 100vh;

  &.down-step-0 {
    transform: translateY(0%);
  }

  &.down-step-1 {
    transform: translateY(100%);
  }

  &.down-step-2 {
    transform: translateY(200%);
  }
`;

export default SlideView;
