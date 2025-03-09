import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Draggable from "react-draggable";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <TransformWrapper disablePadding smooth>
        <TransformComponent>
          <div
            style={{
              position: "relative",
              width: "800px",
              height: "600px",
              border: "1px solid #ccc",
              backgroundColor: "#f0f0f0",
            }}
          >
            {/* Phần tử nền (background) - không có draggable */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <img
                src="https://via.placeholder.com/800x600"
                alt="Background"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Các phần tử có thể kéo thả */}
            <Draggable>
              <div
                style={{
                  position: "absolute",
                  top: 50,
                  left: 50,
                  zIndex: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "10px",
                  border: "1px solid #333",
                  cursor: "move",
                }}
              >
                Draggable Element 1
              </div>
            </Draggable>

            <Draggable>
              <div
                style={{
                  position: "absolute",
                  top: 150,
                  left: 200,
                  zIndex: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "10px",
                  border: "1px solid #333",
                  cursor: "move",
                }}
              >
                Draggable Element 2
              </div>
            </Draggable>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default App;
