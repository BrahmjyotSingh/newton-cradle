class Roof{
constructor(x,y,width,height){
    this.body =
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

display(){
    push();
    rectMode(CENTER);
    Fill(128,128,128)
rect(this.body.position.x,this.body.position,y,this.width,this.length);
Pop();
}
}