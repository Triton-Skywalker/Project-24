class Iron {
    constructor(x,y)
	{
	// assign options to the rubber ball
		var options = {
			'restitution': 0.8,
			'friction': 3,
			'density': 30
		}
		this.w = 80
        this.h = 50
		this.body = Bodies.rectangle(x, y, this.w, this.h, options)
		World.add(world, this.body)

	}
	display(){
		var ironpos = this.body.position
        var angle = this.body.angle
		push()
		translate(ironpos.x, ironpos.y)
        rotate(angle)
		rectMode(CENTER)
		strokeWeight(4)
		stroke("black")
		fill("white")
		//draw the rect here to display the stone
		rect(0,0,this.w,this.h)
		pop()
	}
}