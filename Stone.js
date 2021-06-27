class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y,this.width,this.height);
       
    }
}