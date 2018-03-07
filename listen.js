var svg = document.getElementById("svg");
var clearButton = document.getElementById("clear");

// svg
var ccircle = function(e){
    posX = e.offsetX;
    posY = e.offsetY;
    rad = 15;

    var c = document.createElementNS("http://www.w3.org/2000/svg","circle")
    c.setAttribute("cx", posX);
    c.setAttribute("cy", posY);
    c.setAttribute("r", rad);
    c.setAttribute("fill", "blue");
    c.setAttribute("is_green", false);

    
    svg.appendChild(c);

    // circle elements
    elements = document.getElementsByTagName('circle');
    for (var i = 0; i < elements.length; i++){
	elements[i].addEventListener("click", change_color, true);
    }

}
svg.addEventListener("click", ccircle);

var change_color = function(e){
    e.target.setAttribute("fill", "green");
    if (e.target.getAttribute("is_green") == "true"){
	e.target.remove();

	var posX = Math.random()*500 + 1;
	var posY = Math.random()*500 + 1;
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle")
	c.setAttribute("cx", posX);
	c.setAttribute("cy", posY);
	c.setAttribute("r", rad);
	c.setAttribute("fill", "blue");
	c.setAttribute("is_green", false);
	svg.appendChild(c);
    }
    e.target.setAttribute("is_green", true);
    e.stopPropagation();
}

var respawn = function(e){
    e.target.remove();
}



var clear_can = function(e){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
    firstCircle = true;
}

clear.addEventListener("click", clear_can);
