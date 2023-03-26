function Obstacle(rx, ry, rw, rh){
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;

    this.show = function(){
        rect(rx, ry, rw, rh);
    }
}