var blob;
var blobs =[];
const len = 600;
const hei = 600;
var zoom = 1;


function setup(){
    createCanvas(1200,1200);
    blob = new Blob(width/2,height/2,64);
    blobs = new Array();
    for (var i = 0; i< 100; i++){
        blobs[i] = new Blob(random(-len*2,len*2),random(-hei*2,hei*2),random(10,30));
    }
}
function draw() {
    background(0);
    drawBlobs();
    worldUpdate();
}
function drawBlobs(){
    translate(width/2,height/2);
    var newZoom = 64 / blob.r;
    zoom = lerp(zoom,newZoom,0.03);
    scale (zoom);
    translate(-blob.pos.x,-blob.pos.y);
    blob.show();
    for (var i = 0; i < blobs.length; i++){
        blobs[i].show();
    }

}

function worldUpdate(){
    blob.update();
    // console.log(Array.isArray(blobs));
    for (var i = blobs.length-1; i>= 0 ; i--){
        if (blob.eats(blobs[i])){
            blobs.splice(i,1);
            // blob.r++;
        }

    }
}
