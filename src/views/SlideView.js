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
`;

export default SlideView;
