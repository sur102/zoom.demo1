// import { div, Slider, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
// import PerfectScrollbar from "perfect-scrollbar";

import { Slider, Typography, Button } from "antd";

// Thêm styles cho scrollbar
const styles = {
  scrollbar: {
    ".ps__rail-x, .ps__rail-y": {
      opacity: "1 !important",
      backgroundColor: "#f0f0f0",
    },
    ".ps__thumb-x, .ps__thumb-y": {
      backgroundColor: "#888",
    },
    ".ps__rail-x": {
      height: "10px !important",
    },
    ".ps__rail-y": {
      width: "10px !important",
    },
  },
};

const TestZoom8 = () => {
  const [scale, setScale] = useState(40);
  const [height, setHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouchEnabled, setIsTouchEnabled] = useState(true);
  const baseWidth = 1920;
  const baseHeight = 1080;

  // Xử lý touch events
  const preventTouch = (e) => {
    if (!isTouchEnabled) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const headerElement = document.getElementById("header-zoom");
    const footerElement = document.getElementById("footer-zoom");
    if (headerElement) {
      const heightH = headerElement.offsetHeight;
      setHeight(height + heightH);
    }
    if (footerElement) {
      const heightF = footerElement.offsetHeight;
      setHeight(height + heightF);
    }

    // Thêm/xóa event listeners dựa trên trạng thái isTouchEnabled
    const container = document.querySelector(".scroll-container");
    if (container) {
      if (!isTouchEnabled) {
        container.addEventListener("touchstart", preventTouch, {
          passive: false,
        });
        container.addEventListener("touchmove", preventTouch, {
          passive: false,
        });
        container.addEventListener("touchend", preventTouch, {
          passive: false,
        });
      }

      return () => {
        container.removeEventListener("touchstart", preventTouch);
        container.removeEventListener("touchmove", preventTouch);
        container.removeEventListener("touchend", preventTouch);
      };
    }
  }, [isTouchEnabled]); // Thêm isTouchEnabled vào dependencies

  // Handlers cho Draggable
  const handleDragStart = () => {
    setIsDragging(true);
    console.log("Dragging");
  };

  const handleDragStop = () => {
    setIsDragging(false);
    console.log("Dragging stop");
  };

  const toggleTouch = () => {
    setIsTouchEnabled(!isTouchEnabled);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        id="header-zoom"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "lightblue",
          padding: "10px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          margin: "0 auto",
        }}
      >
        <Typography variant="body1">Zoom:</Typography>
        <Slider
          min={10}
          max={200}
          step={1}
          value={scale}
          onChange={(value) => setScale(value)}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}%`}
          style={{ width: "300px" }}
        />
        <Typography variant="body1">{scale}%</Typography>
        <Button onClick={toggleTouch} type="primary">
          {isTouchEnabled ? "Tắt cảm ứng" : "Bật cảm ứng"}
        </Button>
      </div>
      <div
        className="scroll-container"
        style={{
          minHeight: "0px",
          position: "relative",
          flex: "1 1 0%",
          overflow: "hidden",
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
          touchAction: isTouchEnabled ? "auto" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            contain: "content",
            height: "100%",
            position: "relative",
            scrollbarWidth: "none",
            overflow: "scroll",
          }}
          draggable={false}
        >
          <PerfectScrollbar
            style={{
              width: "100vw",
              height: "80vh",
              ...styles.scrollbar,
            }}
            options={{
              suppressScrollX: false,
              suppressScrollY: false,
              useBothWheelAxes: true,
              swipeEasing: isTouchEnabled,
              wheelPropagation: true,
              minScrollbarLength: 40,
              handlers: isTouchEnabled
                ? ["keyboard", "wheel", "click-rail", "touch"]
                : ["keyboard", "wheel", "click-rail"],
              touchbehavior: isTouchEnabled,
            }}
          >
            <div
              style={{
                display: "flex",
                minHeight: "100%",
                minWidth: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  transform: "scale(1)",
                  flex: "1 1 0%",
                }}
              >
                <div
                  style={{
                    padding: "48px 96px",
                    transition: "padding 0.25s ease-in-out",
                    alignItems: "center",
                    divSizing: "border-div",
                    display: "flex",
                    flexDirection: "row",
                    flexShrink: 0,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      padding: "16px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        backgroundColor: "lightgray",
                        zIndex: 0,
                      }}
                    >
                      <div
                        style={{
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                        >
                          <div></div>
                          <div
                            style={{
                              divShadow:
                                "rgba(64, 87, 109, 0.3) 0px 4px 32px -14px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                width: baseWidth * (scale / 100) + "px",
                                height: baseHeight * (scale / 100) + "px",
                                margin: "0px",
                                backgroundColor: "lightgray",
                              }}
                            >
                              <div
                                style={{
                                  width: baseWidth,
                                  height: baseHeight,
                                  transform: `scale(${scale / 100})`,
                                  ackgroundColor: "rgb(255, 255, 255)",
                                  direction: "ltr",
                                  position: "relative",
                                  transformOrigin: "0px 0px",
                                }}
                              >
                                <div
                                  style={{
                                    width: baseWidth,
                                    height: baseHeight,
                                    position: "relative",
                                    WebkitLocale: "vi-VN",
                                  }}
                                >
                                  <div
                                    className="backGround"
                                    style={{
                                      bottom: "0px",
                                      left: "0px",
                                      position: "absolute",
                                      right: "0px",
                                      top: "0px",
                                      outline: "none",
                                      overflow: "hidden",
                                      pointerEvents: "auto",
                                    }}
                                    draggable={false}
                                  >
                                    <div
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                      }}
                                    >
                                      <div
                                        style={{
                                          height: "100%",
                                          width: "100%",
                                          transition: "transform 0.3s",
                                        }}
                                      >
                                        <div
                                          style={{
                                            width: baseWidth,
                                            height: baseWidth,
                                            transform:
                                              "translate(0px, -420px) rotate(0deg)",
                                            position: "relative",
                                          }}
                                        >
                                          <img
                                            src="https://media-public.canva.com/t2SGY/MAFdtht2SGY/1/s3.jpg"
                                            alt=""
                                            draggable={false}
                                            style={{
                                              objectFit: "fill",
                                              display: "block",
                                              height: "100%",
                                              pointerEvents: "none",
                                              position: "absolute",
                                              width: "100%",
                                              overflowClipMargin: "content-div",
                                              overflow: "clip",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="Item1"
                                    style={{
                                      width: "592.638px",
                                      height: "794.155px",
                                      transform:
                                        "translate(1090.29px, 124.509px)",
                                      pointerEvents: "auto",
                                      cursor: "auto",
                                      position: "absolute",
                                      outline: "none",
                                    }}
                                  >
                                    <div
                                      style={{
                                        height: "100%",
                                        position: "relative",
                                        width: "100%",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div
                                        style={{
                                          height: "100%",
                                          width: "100%",
                                        }}
                                      >
                                        <div
                                          style={{
                                            height: "100%",
                                            width: "100%",
                                            transition: "transform 0.3s",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "592.638px",
                                              height: "794.155px",
                                              transform:
                                                "translate(0px, 0px) rotate(0deg)",
                                              position: "relative",
                                            }}
                                          >
                                            <img
                                              src="https://media-public.canva.com/oBtuo/MAFV69oBtuo/1/s2.png"
                                              alt=""
                                              style={{
                                                objectFit: "fill",
                                                display: "block",
                                                height: "100%",
                                                pointerEvents: "none",
                                                position: "absolute",
                                                width: "100%",
                                                overflowClipMargin:
                                                  "content-div",
                                                overflow: "clip",
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Draggable
                                    bounds="parent"
                                    scale={scale / 100}
                                    onStart={handleDragStart}
                                    onStop={handleDragStop}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: 50,
                                        left: 50,
                                        padding: "10px",
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.8)",
                                        cursor: "move",
                                        zIndex: 1000,
                                      }}
                                    >
                                      Draggable Element 1
                                    </div>
                                  </Draggable>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>

      <div
        id="footer-zoom"
        style={{ touchAction: isTouchEnabled ? "auto" : "none" }}
      >
        awfnwaiofnawion
      </div>
    </div>
  );
};

export default TestZoom8;
