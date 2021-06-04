class Dustbin
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.dustbinWidth = 200;
		this.dustbinHeight = 100;
		this.wallThickness = 20;
		this.angle = 0;
		this.centerbody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
	    this.leftbody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
	   this.rigthbody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y+this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
	 this.image = loadImage("dustbin.png");

	World.add(world,this.leftbody);
	World.add(world,this.rightbody);
	World.add(world,this.centerbody);
	}
    display(){

	rectMode(CENTER);
	push();
    fill(225);
	image(this.image,this.centerBody.position.x,this.centerBody.position.y,-50,100,100)
	rect(this.centerBody.position.x,this.centerBody.position.y,100,20);
	rect(this.leftBody.position.x,this.leftBody.position.y,20,100);
	rect(this.rightBody.position.x,this.rightBody.position.y,20,100);
	pop();
	}
}