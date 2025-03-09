import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const styles = {
  scrollWrapper: {
    width: "800px",
    height: "300px",
    border: "1px solid #ccc",
    background: "#f5f5f5",
    "@media (max-width: 768px)": {
      width: "100%",
      height: "400px",
      // padding: "20px",
    },
  },
  contentArea: {
    width: "2000px",
    height: "1800px",
    // background:
    //   "linear-gradient(45deg, #f0f0f0 25%, #e0e0e0 25%, #e0e0e0 50%, #f0f0f0 50%, #f0f0f0 75%, #e0e0e0 75%, #e0e0e0 100%)",
    background:
      "url(https://wallpapersmug.com/download/1920x1080/20fefb/dark-tree-sunset-landscape-art.jpg)",
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
    touchAction: "none",
  },
};

const TestScroll = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  const scrollContainerRef = useRef(null);
  const ps = useRef(null);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 1850,
    bottom: 1700,
  });

  useEffect(() => {
    if (scrollContainerRef.current && isScrollEnabled) {
      ps.current = new PerfectScrollbar(scrollContainerRef.current, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: false,
        suppressScrollY: false,
      });
    }

    return () => {
      if (ps.current) {
        ps.current.destroy();
        ps.current = null;
      }
    };
  }, [isScrollEnabled]);

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
    if (ps.current) {
      ps.current.update();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    setIsScrollEnabled(false);
    if (ps.current) {
      ps.current.destroy();
      ps.current = null;
    }
  };

  const handleDragStop = () => {
    setIsDragging(false);
    setIsScrollEnabled(true);
    if (scrollContainerRef.current) {
      ps.current = new PerfectScrollbar(scrollContainerRef.current, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20,
      });
    }
  };

  return (
    <Wrapper className="container">
      <div style={styles.scrollWrapper}>
        <div
          ref={scrollContainerRef}
          style={{
            position: "relative",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            // touchAction: isScrollEnabled ? "auto" : "none",
          }}
        >
          <div style={styles.contentArea}>
            <Draggable
              position={position}
              onDrag={handleDrag}
              bounds={bounds}
              onStart={handleDragStart}
              onStop={handleDragStop}
              enableUserSelectHack={false}
            >
              <div style={styles.draggableBox}>
                {isDragging ? "Đang kéo..." : "Kéo tôi!"}
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TestScroll;
