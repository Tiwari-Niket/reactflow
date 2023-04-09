import React from "react";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">Module</div>
      <hr/>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Sample Module")}
        draggable
      >
       Sample Module      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Sample Module")}
        draggable
      >
        Sample Module
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Sample Module")}
        draggable
      >
       Sample Module      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Sample Module")}
        draggable
      >
       Sample Module
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Sample Module")}
        draggable
      >
       Sample Module      </div>
    </aside>
  );
};
