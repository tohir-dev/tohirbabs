import { useEffect, useRef } from "react";

const LineGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set the canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Define grid properties
    const gridSize = 80;
    const gridColor = "#fff";

    // Draw the grid
    context.beginPath();
    context.strokeStyle = gridColor;

    // Vertical lines
    for (let x = 0; x <= canvas.width; x += gridSize) {
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
    }

    // Horizontal lines
    for (let y = 0; y <= canvas.height; y += gridSize) {
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
    }

    context.stroke();
  }, []); // Empty dependency array to run the effect only once on mount

  return <canvas ref={canvasRef} />;
};

export default LineGridCanvas;
