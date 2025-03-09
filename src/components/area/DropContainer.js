import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Slider } from "@mui/material";
import Area from "./Area";

const DropContainer = () => {
  const [scale, setScale] = useState(1);
  const baseWidth = 800;
  const baseHeight = 600;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <Slider
        className="my-5 w-25"
        min={0.5}
        max={2}
        step={0.1}
        value={scale}
        onChange={(e) => setScale(e.target.value)}
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        color="secondary"
      />
      <div
        className="border border-gray-700 relative m-auto"
        style={{
          width: baseWidth,
          height: baseHeight,
          overflow: scale <= 1 ? "hidden" : "auto",
        }}
      >
        {scale > 1 ? (
          <PerfectScrollbar>
            <Area scale={scale} />
          </PerfectScrollbar>
        ) : (
          <Area scale={scale} />
        )}
      </div>
    </div>
  );
};

export default DropContainer;
