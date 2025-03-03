import React, { useState } from "react";
import { Stage, Layer, Rect, Circle, Text } from "react-konva";

const KonvaTextEditor = () => {
  const [shapes, setShapes] = useState([]);

  // Add a rectangle
  const addRectangle = () => {
    setShapes([
      ...shapes,
      {
        id: shapes.length,
        type: "rect",
        x: 50,
        y: 50,
        width: 100,
        height: 60,
        fill: "red",
      },
    ]);
  };

  // Add a circle
  const addCircle = () => {
    setShapes([
      ...shapes,
      {
        id: shapes.length,
        type: "circle",
        x: 150,
        y: 150,
        radius: 40,
        fill: "blue",
      },
    ]);
  };

  // Add text
  const addText = () => {
    setShapes([
      ...shapes,
      {
        id: shapes.length,
        type: "text",
        x: 200,
        y: 200,
        text: "Hello, Konva!",
        fontSize: 24,
        fill: "green",
      },
    ]);
  };

  // Clear all shapes
  const clearCanvas = () => setShapes([]);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Toolbar */}
      <div className="flex gap-3 mb-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={addRectangle}
        >
          Add Rectangle
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={addCircle}
        >
          Add Circle
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={addText}
        >
          Add Text
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded"
          onClick={clearCanvas}
        >
          Clear Canvas
        </button>
      </div>

      {/* Konva Canvas */}
      <Stage width={800} height={500} className="border border-gray-300">
        <Layer>
          {shapes.map((shape) => {
            if (shape.type === "rect") {
              return <Rect key={shape.id} {...shape} draggable />;
            } else if (shape.type === "circle") {
              return <Circle key={shape.id} {...shape} draggable />;
            } else if (shape.type === "text") {
              return <Text key={shape.id} {...shape} draggable />;
            }
            return null;
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export { KonvaTextEditor };
