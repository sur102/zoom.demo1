import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomableContent } from "./TestZoom";
import PerfectScrollbar from "react-perfect-scrollbar";
const TestZoom2 = () => {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.5}
      maxScale={3}
      initialPositionX={200}
      initialPositionY={100}
      //   disabled
      centerZoomedOut
      //   disablePadding
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
            <ZoomableContent />
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

export default TestZoom2;
