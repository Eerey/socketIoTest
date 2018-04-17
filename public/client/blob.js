function Blob(x,y,r){
    this.pos = createVector(x,y);
    this.r = r;
    this.mass = 2*3.14159*r
    this.show = function(){
        fill(255);
        ellipse(this.pos.x,this.pos.y, this.r*2, this.r*2);
    }


    this.update = function(){
        var vel = createVector(mouseX-width/2, mouseY-height/2);
        var mult = vel.mag();
        switch (true){
            case (mult < 35):
                vel.setMag(0);
                break;
            case (mult < 75):
                vel.setMag(1);
                break;
            case (mult < 120):
                vel.setMag(2);
                break;
            default:
                vel.setMag(6);
        }
        this.pos.add(vel);
    }

    this.eats = function(otherBlob){
        var d = p5.Vector.dist(this.pos,otherBlob.pos);
        if (d<this.r + otherBlob.r){
            this.r += otherBlob.r/(2*3.14159);
            return true;
        } else {
            return false;
        }
    }
}
function limitNum(num, min, max) {
    if (num < min) return min
    else if ( num > max) return max
    else return num;
}