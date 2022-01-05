class Bob {

constructor(x,y,r){
    var option = {
        isstatic: false,
        restitution: 1,
        friction: 0,
        density: 7.8,
    }

    this.body = Bodies.circle(x,y,(this.r)/2,options);
    World.add(world, this.body);

    console.log(this.body);
}
display(){
    Push();
    translate(this.body.position.x,this.body.position.y);
ellipseMode(RADIUS);
Fill(254,0,255);
ellipse(0,0,this.r,this.r);
Pop();
}

}
