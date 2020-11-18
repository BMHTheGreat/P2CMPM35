function init(elements) {
	let canvasW = 900;
    let canvasH = 400;
	
	let margin = 50;
	let w = canvasW - (margin * 2);
	let h = canvasH - (margin * 2);
	let xinc = w / 10;
    let yinc = h / 10;

	let svg = d3.select("body").append("svg")
	.attr("width", canvasW)
	.attr("height", canvasH)
	.style("background-color", d3.color("lightcyan") )
    ;
		
		
	let Games;

    gamesRPG = elements.filter( e=> {return e.Game == "RPG"} );
    gamesMGacha = elements.filter( e=> {return e.Game == "Mobile Gacha"} );
    
	
	let rects = svg.selectAll()
	   .data(gamesRPG)
	   .enter()
	      .append("rect")
		     .attr("fill", d3.color("turquoise"))
			 .attr("x", d=> {return -30 + (margin*1.75) + (100*(d.ID)); } )
			 .attr("y", d=> {return -30 + canvasH - (margin + (d.GameID*yinc)); } )
			 .attr("width", d=> {return 20} )
			 .attr("height", d=> {return 20} )
			 .attr("stroke", d3.color("black"))
			 .attr("stroke-width", 3)
	
	let rects2 = svg.selectAll()
	   .data(gamesMGacha)
	   .enter()
	      .append("rect")
		     .attr("fill", d3.color("red"))
			 .attr("x", d=> {return -30 + (margin*1.75) + (100*(d.ID)); } )
			 .attr("y", d=> {return -30 + canvasH - (margin + (d.GameID*yinc)); } )
			 .attr("width", d=> {return 20} )
			 .attr("height", d=> {return 20} )
			 .attr("stroke", d3.color("black"))
			 .attr("stroke-width", 3)
	

	
	const legend = svg.append("rect")
	.attr("fill", "transparent")
	.attr("x", (canvasW - 250) )
	.attr("y", 50)
	.attr("width", 200)
	.attr("height", 150)
	.attr("stroke", d3.color("black"))
	.attr("stroke-width", 3)
	
	const rectComplete = svg.append("rect")
	.attr("fill", "turquoise")
	.attr("x", (canvasW - 225) )
	.attr("y", 75)
	.attr("width",30)
	.attr("height", 30)
	.attr("stroke", d3.color("black"))
	.attr("stroke-width", 3)
	
	const textComplete = svg.append("text")
	.attr("x", (canvasW - 130))
	.attr("y", 95)
	.attr("text-anchor","middle")
	.attr("font-family", "sans-serif")
	.attr("font-size", "15px")
	.attr("fill", d3.color("black"))
	.text("gamesRPG")
	
	
	const rectIncomplete = svg.append("rect")
	.attr("fill", "red")
	.attr("x", (canvasW - 225) )
	.attr("y", 140)
	.attr("width", 30)
	.attr("height", 30)
	.attr("stroke", d3.color("black"))
	.attr("stroke-width", 3)
	
	const textIncomplete = svg.append("text")
	.attr("x", (canvasW - 125))
	.attr("y", 160)
	.attr("text-anchor","middle")
	.attr("font-family", "sans-serif")
	.attr("font-size", "15px")
	.attr("fill", d3.color("black"))
	.text("gamesMGatcha")	
	
	const MonText = svg.append("text")
    .attr("x",  (-25 + (margin*1.75)) + 10 )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Monday");
	
	const TuesText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + 100) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Tuesday");
	
    const WedText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*2)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Wednesday");
	
    const ThursText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*3)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Thursday");

	const FriText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*4)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Friday");
	
	const SatText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*5)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Saturday");	
	
}