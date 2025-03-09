import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const ZoomableContent = () => {
  const [scale, setScale] = useState(80);

  return (
    <Box sx={{ height: "100vh", overflow: "hidden", position: "relative" }}>
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

      <Box sx={{ marginTop: "60px", height: "calc(100vh - 60px)" }}>
        <PerfectScrollbar>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          > */}
          <Box
            sx={{
              width: `${1920 * (scale / 100)}px`,
              height: `${1080 * (scale / 100)}px`,
              backgroundColor: "lightcoral",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 1920,
                  height: 1080,
                  transform: `scale(${scale / 100})`,
                  backgroundColor: "lightgreen",
                }}
              >
                Zoomable Content
              </Box>
            </Typography>
          </Box>
          {/* </Box> */}
        </PerfectScrollbar>
      </Box>
    </Box>
  );
};

export default ZoomableContent;
