let fontBoxCounter = false;  
class Text extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;

    }

    onMouseDown(coord, style, event){  
        
        if (fontBoxCounter == false) {
            
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.font = `${style.textSize}px ${style.font}`;
            this.contextReal.fillStyle = style.fillColor;
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.border = "2px red solid";
            input.style.placeholder = 'Type here';
            input.style.height = 40;
            input.style.width = 350;
            input.style.font = style.font;
            input.placeholder = "Please type here";
            input.style.left = (this.origX - 5) + 'px';
            input.style.top = (this.origY - 5) + 'px';
            input.id= 'textBox' 
            document.body.appendChild(input);
            fontBoxCounter = true;

            input.onkeydown = function Clickenter(input) {
                if (input.key == 'Enter') {
                    this.typedText= document.getElementById("textBox").value;
                    contextReal.fillText(this.typedText, 0, 0);
                    fontBoxCounter = false;
                }
            };   
        } 
    }

    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(coord){
        if(coord[0] < this.origX + 300 && coord[0] > this.origX - 300 && coord[1] < this.origY + 40 && coord[1] > this.origY - 40) {
        } else {
            $('#textBox').remove();
            fontBoxCounter = false;
        }
    }
    onMouseEnter(){}
}