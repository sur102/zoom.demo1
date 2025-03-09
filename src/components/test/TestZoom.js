import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Slider } from "@mui/material";
import { Rnd } from "react-rnd";

const TestZoom = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 100 });
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
        valueLabelDisplay="auto"
        color="secondary"
      />
      <div className="relative">
        <div
          className="border border-gray-700 relative m-auto"
          style={{
            width: baseWidth,
            height: baseHeight,
            overflow: scale <= 1 ? "hidden" : "auto",
          }}
        >
          {/* {scale > 1 ? ( */}
          <PerfectScrollbar>
            <ZoomableContent
              scale={scale}
              position={position}
              setPosition={setPosition}
            />
          </PerfectScrollbar>
          {/* ) : (
            <ZoomableContent
              scale={scale}
              position={position}
              setPosition={setPosition}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export const ZoomableContent = ({ scale, position, setPosition }) => {
  const baseWidth = 800;
  const baseHeight = 600;

  const [contextMenu, setContextMenu] = useState(null);

  const handleDrag = (e, data) => {
    setPosition({
      x: position.x + data.deltaX / scale,
      y: position.y + data.deltaY / scale,
    });
  };

  const handleContextMenu = (event, id) => {
    event.preventDefault();
    setContextMenu({ x: event.pageX, y: event.pageY });
  };

  return (
    <div
      id="zoomable-content"
      className="relative"
      style={{
        width: baseWidth * scale,
        height: baseHeight * scale,
        backgroundImage:
          "url(https://wallpapersmug.com/download/800x600/341756/miami-pixel-art-cityscape.jpg)",
        backgroundSize: "cover",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "center",
        zoom: scale,
      }}
    >
      <Rnd
        position={{ x: position.x, y: position.y }}
        size={{ width: 50, height: 50 }}
        className="draggable-item"
        bounds="#zoomable-content"
        onDrag={handleDrag}
        enableResizing={false}
        onContextMenu={(e) => {
          handleContextMenu(e);
        }}
        lockAspectRatio={true}
        scale={scale}
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
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </Rnd>
    </div>
  );
};

export default TestZoom;
