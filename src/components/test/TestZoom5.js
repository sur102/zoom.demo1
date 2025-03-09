import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Slider } from "@mui/material";
import { Rnd } from "react-rnd";
import Draggable from "react-draggable";

const TestZoom = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 100 });
  const baseWidth = 1920;
  const baseHeight = 1080;

  const handleDrag = (e, data) => {
    setPosition({
      x: position.x + data.deltaX,
      y: position.y + data.deltaY,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <Slider
        className="my-5 w-25"
        min={0.1}
        max={2}
        step={0.1}
        value={scale}
        onChange={(e) => setScale(e.target.value)}
        valueLabelDisplay="auto"
        color="secondary"
        style={{ position: "fixed", bottom: 0 }}
      />
      <div
        style={{ width: 800, height: 600, overflow: "hidden", margin: "auto" }}
      >
        <PerfectScrollbar>
          <div className="jj">
            <div
              className="relative"
              style={{
                width: baseWidth * scale,
                height: baseHeight * scale,
                margin: "auto",
              }}
            >
              <div
                className="border border-gray-700 relative"
                style={{
                  width: baseWidth,
                  height: baseHeight,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: baseWidth,
                    height: baseHeight,
                  }}
                >
                  <div style={{ width: "100%", height: "100%" }}>
                    <img
                      src="https://wallpapersmug.com/download/800x600/341756/miami-pixel-art-cityscape.jpg"
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        //   objectFit: "contain",
                      }}
                      draggable="false"
                    />
                  </div>

                  <Rnd
                    position={{ x: position.x, y: position.y }}
                    size={{ width: 50, height: 50 }}
                    className="draggable-item"
                    bounds="parent"
                    onDrag={handleDrag}
                    enableResizing={false}
                    lockAspectRatio={true}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <img
                        src="https://plakatkunst.com/cdn/shop/files/50x50-traeramme-sort-bred.jpg?v=1697931557&width=2048"
                        alt=""
                        draggable="false"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </Rnd>
                </div>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default TestZoom;
