/**********************************************
 * Straight line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class straightLine extends PaintFunction {
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    onMouseDown(coord, event) {
        this.context.strokeStyle = "#f44";
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1])
    }
  
    onDragging() {
    }
  
    onMouseMove() {}
  
    onMouseUp(coord, event) {
        this.draw(coord[0], coord[1]);
        saveToSavePoint();
    }
    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        //
        this.context.lineTo(x, y);
        // Draw the line onto the page
        this.context.stroke();
      }
  }
  