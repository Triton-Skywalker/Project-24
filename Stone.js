class Stone {
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
		var options = {
			'restitution': 0.8,
			'friction': 0.9,
			'density': 12
		}
		this.w = w
		this.h = h
		this.body = Bodies.rectangle(x, y, this.w, this.h, options)
		World.add(world, this.body)

	}
	display(){
		var stonepos =this.body.position
		var angle = this.body.angle
		push()
		translate(stonepos.x, stonepos.y)
		rotate(angle)
		rectMode(CENTER)
		strokeWeight(4)
		stroke("black")
		fill('#964B00')
		//draw the rect here to display the stone
		rect(0,0,this.w,this.h)
		pop()
	}
}