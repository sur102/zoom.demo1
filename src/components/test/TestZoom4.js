import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ZoomableContent } from "./TestZoom";
import c from "../../assets/charm1.png";
import { Rnd } from "react-rnd";
const ImageViewer = () => {
  const [scale, setScale] = useState(1);

  return (
    <PerfectScrollbar>
      <div
        className="relative"
        style={{
          width: 800,
          height: 600,
          backgroundImage:
            "url(https://wallpapersmug.com/download/800x600/341756/miami-pixel-art-cityscape.jpg)",
          backgroundSize: "cover",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center",
        }}
      >
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={5}
          disablePadding
          onZoom={(e) => setScale(e.scale)}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div style={{ marginBottom: "10px", textAlign: "center" }}>
                <button onClick={() => zoomIn()} style={buttonStyle}>
                  Zoom In
                </button>
                <button onClick={() => zoomOut()} style={buttonStyle}>
                  Zoom Out
                </button>
                <button onClick={() => resetTransform()} style={buttonStyle}>
                  Reset
                </button>
              </div>
              <TransformComponent>
                <Rnd
                  className="draggable-item"
                  bounds="parent"
                  // position={position} // Giữ nguyên vị trí hiện tại
                  size={{ width: 50 * scale, height: 50 * scale }} // Cập nhật kích thước theo scale
                  enableResizing={false}
                  // onDragStop={(e, d) => {
                  //   setPosition((prev) => ({
                  //     x: prev.x + d.deltaX * scale, // Áp dụng hệ số tốc độ
                  //     y: prev.y + d.deltaY * scale,
                  //   }));
                  // }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={c}
                      alt=""
                      draggable="false"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </Rnd>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </PerfectScrollbar>
  );
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 15px",
  fontSize: "16px",
  cursor: "pointer",
};

export default ImageViewer;
