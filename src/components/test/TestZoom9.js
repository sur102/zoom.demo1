import { Box, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const TestZoom7 = () => {
  const [scale, setScale] = useState(40);
  return (
    <div style={{ display: "block", overflow: "hidden" }}>
      <Box
        sx={{
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
          onChange={(e, newValue) => setScale(newValue)}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}%`}
          sx={{ width: "300px" }}
        />
        <Typography variant="body1">{scale}%</Typography>
      </Box>
      <Box
        sx={{
          minHeight: "0px",
          position: "relative",
          flex: "1 1 0%",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
          draggable={false}
        >
          <Box
            sx={{
              contain: "content",
              height: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                scrollbarWidth: "none",
                overflow: "scroll",
              }}
            >
              <PerfectScrollbar>
                <Box
                  sx={{
                    // position: "absolute",
                    display: "flex",
                    minHeight: "100%",
                    minWidth: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      position: "relative",
                      transform: "scale(1)",
                      flex: "1 1 0%",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "48px 96px",
                        transition: "padding 0.25s ease-in-out",
                        alignItems: "center",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "row",
                        flexShrink: 0,
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          padding: "16px",
                          position: "relative",
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            backgroundColor: "red",
                          }}
                        >
                          <Box
                            sx={{
                              zIndex: 0,
                              position: "relative",
                            }}
                          >
                            <Box
                              sx={{
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  position: "relative",
                                }}
                              >
                                <Box></Box>
                                <Box
                                  sx={{
                                    boxShadow:
                                      "rgba(64, 87, 109, 0.3) 0px 4px 32px -14px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: 1920 * (scale / 100) + "px",
                                      height: 1080 * (scale / 100) + "px",
                                      margin: "0px",
                                      backgroundColor: "red",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: "1920px",
                                        height: "1080px",
                                        transform: `scale(${scale / 100})`,
                                        ackgroundColor: "rgb(255, 255, 255)",
                                        direction: "ltr",
                                        position: "relative",
                                        transformOrigin: "0px 0px",
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: "1920px",
                                          height: "1080px",
                                          position: "relative",
                                          WebkitLocale: "vi-VN",
                                        }}
                                      >
                                        <Box
                                          className="backGround"
                                          sx={{
                                            bottom: "0px",
                                            left: "0px",
                                            position: "absolute",
                                            right: "0px",
                                            top: "0px",
                                            outline: "none",
                                            overflow: "hidden",
                                            pointerEvents: "auto",
                                            touchAction:
                                              "pan-x pan-y pinch-zoom",
                                          }}
                                          draggable={false}
                                        >
                                          <Box
                                            sx={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                bottom: "0px",
                                                left: "0px",
                                                position: "absolute",
                                                right: "0px",
                                                top: "0px",
                                                background:
                                                  "rgb(255, 255, 255)",
                                              }}
                                            ></Box>
                                            <Box
                                              sx={{
                                                height: "100%",
                                                width: "100%",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  height: "100%",
                                                  width: "100%",
                                                  transition: "transform 0.3s",
                                                }}
                                              >
                                                <Box
                                                  sx={{
                                                    width: "1920px",
                                                    height: "1920px",
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
                                                      overflowClipMargin:
                                                        "content-box",
                                                      overflow: "clip",
                                                    }}
                                                  />
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                        <Box
                                          className="Item1"
                                          sx={{
                                            touchAction:
                                              "pan-x pan-y pinch-zoom",
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
                                          <Box
                                            sx={{
                                              height: "100%",
                                              position: "relative",
                                              width: "100%",
                                              overflow: "hidden",
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                height: "100%",
                                                width: "100%",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  height: "100%",
                                                  width: "100%",
                                                  transition: "transform 0.3s",
                                                }}
                                              >
                                                <Box
                                                  sx={{
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
                                                        "content-box",
                                                      overflow: "clip",
                                                    }}
                                                  />
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                        <Draggable
                                          bounds="parent"
                                          scale={scale / 100}
                                        >
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: 50,
                                              left: 50,
                                              zIndex: 2,
                                              backgroundColor:
                                                "rgba(255, 255, 255, 0.8)",
                                              padding: "10px",
                                              // border: "1px solid #333",
                                              cursor: "move",
                                            }}
                                          >
                                            Draggable Element 1
                                          </div>
                                        </Draggable>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box></Box>
                                <Box></Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </PerfectScrollbar>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TestZoom7;
