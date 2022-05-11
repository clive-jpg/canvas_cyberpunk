class Eraser extends PaintFunction {
    // This class extends the PaintFunction class
  
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }

    onMouseDown(coord, event){
        this.context.lineJoin = "round"; // Eraser Kind
        this.context.lineWidth = 20; // Eraser Width
        
        
        this.context.globalCompositeOperation = "destination-out" //The existing content is kept where it doesn't overlap the new shape.
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        saveToSavePoint(); //snapshot for undo-redo function
    }

    onDragging(coord, event){
        this.draw(coord[0], coord[1]);
    }
    
    //Return to default setting on top of existing canvas element
    onMouseUp() {
      this.context.globalCompositeOperation = "source-over"
    }

  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
  draw(x, y) {
    //
    this.context.lineTo(x, y);
    // Erase the line onto the page
    this.context.stroke();
  }

}

$("#eraser").click(() => {
    currentFunction = new Eraser(contextReal);
  });
