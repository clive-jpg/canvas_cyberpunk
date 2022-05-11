//Take snapshot of 
function saveToSavePoint() {
    step++;
    if (step < savePointArray.length) {
      savePointArray.length = step;
    }
    savePointArray.push(
      contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
    );
    console.log(`this is step:${step} and saved to the savedpoint`);
  }
  
  //this makes the undo button work.
  $("#undo").click(() => {
    if (savePointArray.length == 0) {
      console.log("no more undo");
    } else if (step <= 0) {
      console.log("no more steps to undo");
      console.log(step);
      console.log(redoArray);
      redoArray.push(savePointArray.pop());
      contextReal.fillStyle = startBackgroundColor;
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
      step = -1;
    } else {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      step--;
      contextReal.putImageData(savePointArray[step], 0, 0);
      redoArray.push(savePointArray.pop());
      console.log(`undo complete step:${step+1}`);
    }
  });
  
  //this makes the redo button work.(however only 1 time)
  $("#redo").click(() => {
    if (redoArray.length <= 0) {
      console.log("no more steps to redo");
    } else {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.putImageData(redoArray[redoArray.length - 1], 0, 0);
      redoArray.pop();
      saveToSavePoint();
      console.log(`redo complete step:${step}`);
      console.log(redoArray);
    }
  });