import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

const KonvaToolbar = () => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const inputRef = useRef(null);

  // Add new text box
  const addTextBox = () => {
    setElements([
      ...elements,
      {
        id: elements.length,
        x: 100,
        y: 100,
        width: 200,
        height: 50,
        text: "Double-click to edit",
        fontSize: 16,
        isEditing: false,
      },
    ]);
  };

  // Handle dragging
  const handleDragMove = (id, e) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, x: e.target.x(), y: e.target.y() } : el,
      ),
    );
  };

  // Handle double-click to enable editing
  const handleTextClick = (id) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, isEditing: true } : el)),
    );
    setSelectedId(id);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === selectedId ? { ...el, text: e.target.value } : el,
      ),
    );
  };

  // Finish editing
  const handleBlur = () => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === selectedId ? { ...el, isEditing: false } : el,
      ),
    );
    setSelectedId(null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Toolbar */}
      <div className="w-full bg-gray-800 p-2 text-white flex justify-center">
        <button className="px-4 py-2 bg-blue-500 rounded" onClick={addTextBox}>
          Add Text Box
        </button>
      </div>

      {/* Konva Canvas */}
      <div className="relative border border-gray-300 mt-4">
        <Stage width={800} height={500} className="bg-white">
          <Layer>
            {elements.map((el) => (
              <React.Fragment key={el.id}>
                {/* Rectangle */}
                <Rect
                  x={el.x}
                  y={el.y}
                  width={el.width}
                  height={el.height}
                  fill="lightgray"
                  stroke="black"
                  strokeWidth={1}
                  draggable
                  onDragMove={(e) => handleDragMove(el.id, e)}
                  onDblClick={() => handleTextClick(el.id)}
                />
                {/* Text Inside */}
                <Text
                  x={el.x + 10}
                  y={el.y + 15}
                  text={el.text}
                  fontSize={el.fontSize}
                  fill="black"
                  onDblClick={() => handleTextClick(el.id)}
                />
              </React.Fragment>
            ))}
          </Layer>
        </Stage>

        {/* Editable Input */}
        {selectedId !== null && (
          <input
            ref={inputRef}
            value={elements.find((el) => el.id === selectedId)?.text || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="absolute p-1 border border-blue-500 bg-white text-black"
            style={{
              left: elements.find((el) => el.id === selectedId)?.x + "px",
              top: elements.find((el) => el.id === selectedId)?.y + "px",
              fontSize: "16px",
              width: "200px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export { KonvaToolbar };
