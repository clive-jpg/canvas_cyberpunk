//  * Curve Functionality
//  * ==================================
class CurveLine extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
		this.click = 0;
	}

	onMouseDown(coord, event) {
    this.contextDraft.strokeStyle = "#f44";
    this.contextDraft.lineWidth = 5;
    this.contextDraft.lineCap = "round";
    this.contextReal.strokeStyle = "#f44";
    this.contextReal.lineWidth = 5;
    this.contextReal.lineCap = "round";
	}
	onDragging(coord, event) {}

	onMouseMove(coord, event) {
		if (this.click === 1) {
			let cpx0 = coord[0];
			let cpy0 = coord[1];
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, cpx0, cpy0);
			this.contextDraft.stroke();
		} else if (this.click === 2) {
			let cpx0 = coord[0];
			let cpy0 = coord[1];
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, this.endpointX, this.endpointY);
			this.contextDraft.stroke();
		}
	}
	onMouseUp(coord, event) {
		if (this.click === 0) {
			this.origX = coord[0];
			this.origY = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.click++;
		} else if (this.click === 1) {
			let cpx0 = coord[0];
			let cpy0 = coord[1];
			this.endpointX = coord[0];
			this.endpointY = coord[1];
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, this.endpointX, this.endpointY);
			this.contextDraft.stroke();
			this.click++;
		} else if (this.click === 2) {
			let cpx0 = coord[0];
			let cpy0 = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextReal.beginPath();
			this.contextReal.moveTo(this.origX, this.origY);
			this.contextReal.quadraticCurveTo(cpx0, cpy0, this.endpointX, this.endpointY);
			this.contextReal.stroke();
			saveToSavePoint();
			this.click = 0;
		}
	}
	onMouseLeave() {}
	onMouseEnter() {}
	drawDraftCurve() {
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, this.endpointX, this.endpointY);
			this.contextDraft.stroke();
	}


}
