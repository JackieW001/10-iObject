var clear = document.getElementById("clear");
var svg = document.getElementById("board");

var clearIt = function(e){
    while (svg.hasChildNodes()){
	svg.removeChild(svg.firstChild);
    }
};

var drawIt = function(xVal, yVal){
    var c = {
	circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	x: xVal,
	y: yVal,
	radius: "15",
	color: "powderblue",
	create: function(){
	    this.circle.setAttribute("cx",this.x);
	    this.circle.setAttribute("cy",this.y);
	    this.circle.setAttribute("r",this.radius);
	    this.circle.setAttribute("fill",this.color);
	    svg.appendChild(this.circle);
	    this.circle.addEventListener("click", this.change);
	},
	change: function(e){
	    if (this.getAttribute("fill") == "powderblue"){
		this.setAttribute("fill", "#EFA8B8");
		e.stopPropagation();
	    }
	    else{
		svg.removeChild(this);
		e.stopPropagation();
		xcor = Math.floor(Math.random()*500);
		ycor = Math.floor(Math.random()*500);
		drawIt(xcor,ycor);
	    }
	}
    }
    c.create();
    return c;
};
	
var drawCircle = function(e){
    drawIt(e.offsetX, e.offsetY);
};
    

clear.addEventListener("click", clearIt);
svg.addEventListener("click", drawCircle);
