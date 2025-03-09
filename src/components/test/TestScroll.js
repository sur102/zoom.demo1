import React, { useState } from "react";
import Draggable from "react-draggable";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const styles = {
  wrapper: {
    padding: "20px",
  },
  scrollWrapper: {
    width: "800px",
    height: "600px",
    border: "1px solid #ccc",
    background: "#f5f5f5",
  },
  contentArea: {
    width: "2000px",
    height: "1800px",
    background:
      "linear-gradient(45deg, #f0f0f0 25%, #e0e0e0 25%, #e0e0e0 50%, #f0f0f0 50%, #f0f0f0 75%, #e0e0e0 75%, #e0e0e0 100%)",
    backgroundSize: "40px 40px",
    position: "relative",
  },
  draggableBox: {
    width: "150px",
    height: "100px",
    background: "#4CAF50",
    borderRadius: "8px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "move",
    userSelect: "none",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

const TestScroll = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 1850, // 2000 - 150 (draggable width)
    bottom: 1700, // 1800 - 100 (draggable height)
  });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.scrollWrapper}>
        <div
          style={{
            width: "100vw !important",
            height: "100vh !important",
            overflow: "auto",
          }}
          options={{
            wheelSpeed: 1,
            wheelPropagation: true,
            minScrollbarLength: 20,
          }}
        >
          <div style={styles.contentArea}>
            <Draggable
              position={position}
              onDrag={handleDrag}
              bounds={bounds}
              onStart={() => setIsDragging(true)}
              onStop={() => setIsDragging(false)}
            >
              <div style={styles.draggableBox}>
                {isDragging ? "Đang kéo..." : "Kéo tôi!"}
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScroll;
