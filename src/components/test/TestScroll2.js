import { Button } from "antd/es/radio";
import React, { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const styles = {
  container: {
    position: "relative",
    height: "500px", // Chiều cao cố định cho container
    margin: "20px", // Tạo khoảng cách với các phần tử khác
  },
  scrollContainer: {
    width: "2000px",
    height: "1000px",
    background: "lightgray",
  },
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

const TestScroll = () => {
  const [touchStart, setTouchStart] = useState(false);
  const psRef = useRef(null);
  // State để lưu vị trí scroll
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setTouchStart(!touchStart);
  };

  useEffect(() => {
    if (psRef.current) {
      const psInstance = psRef.current._ps;

      if (psInstance) {
        psInstance.settings.suppressScrollX = touchStart;
        psInstance.settings.suppressScrollY = touchStart;

        // Khôi phục vị trí scroll sau khi cập nhật
        psInstance.element.scrollTop = scrollPosition.y;
        psInstance.element.scrollLeft = scrollPosition.x;
        psInstance.update();
      }
    }
  }, [touchStart, scrollPosition]);

  // Xử lý sự kiện scroll
  const handleScroll = () => {
    if (psRef.current) {
      const element = psRef.current._ps.element;
      setScrollPosition({
        x: element.scrollLeft,
        y: element.scrollTop,
      });
    }
  };

  // Xử lý sự kiện ps-scroll-x và ps-scroll-y
  const handlePsScroll = () => {
    handleScroll();
  };

  return (
    <div style={styles.container}>
      <PerfectScrollbar
        // key={touchStart}
        ref={psRef}
        style={{
          ...styles.scrollbar,
          touchAction: touchStart ? "auto" : "none",
          WebkitUserSelect: "none",
        }}
        options={{
          suppressScrollX: touchStart,
          suppressScrollY: touchStart,
          // useBothWheelAxes: true,
          swipeEasing: true,
          wheelPropagation: false,
          // minScrollbarLength: 40,
          // handlers: touchStart
          //   ? ["keyboard", "wheel", "drag-thumb", "touch", "click-rail"]
          //   : [],
          touchbehavior: false,
        }}
        onScrollY={handlePsScroll}
        onScrollX={handlePsScroll}
      >
        <div style={styles.scrollContainer}>
          <div>Nội dung dài cần thanh cuộn</div>
          <div>Vị trí scroll hiện tại:</div>
          <div>X: {scrollPosition.x}px</div>
          <div>Y: {scrollPosition.y}px</div>
        </div>
      </PerfectScrollbar>
      <Button onClick={handleClick}>
        {touchStart ? "Tắt cảm ứng" : "Bật cảm ứng"}
      </Button>
    </div>
  );
};

export default TestScroll;
