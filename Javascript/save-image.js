/**********************************************
 * Image save function
 * ==================================
 ***********************************************/

function putImage(){
    var canvas1 = document.getElementById("canvas-real");
    if (canvas1.getContext){
        var ctx = canvas1.getContext("2d");
        var myImage = canvas1.toDataURL("image/png").replace("image/png", "image/octet-stream");
    }
    var imageElement = document.getElementById("MyPix");
    window.location.href = myImage;
}