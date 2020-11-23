function init(elements) {
	let canvasW = 1100;
    let canvasH = 800;
	
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
    
	//games = elements.filer( e=> {return e.Game == "RPG" || e.Game == "Mobile Gacha"} );
    gamesRPG = elements.filter( e=> {return e.Game == "RPG"} );
    gamesMGacha = elements.filter( e=> {return e.Game == "Mobile Gacha"} );
    
	const legend = svg.append("rect")
	.attr("fill", "transparent")
	.attr("x", (canvasW - 250) )
	.attr("y", 50)
	.attr("width", 200)
	.attr("height", 150)
	.attr("stroke", d3.color("black"))
	.attr("stroke-width", 3)
	
	const rectgamesRPG = svg.append("rect")
	.attr("fill", "lightblue",.75)
	.attr("x", (canvasW - 225) )
	.attr("y", 75)
	.attr("width",30)
	.attr("height", 30)
	.attr("stroke", d3.color("black"))
	.attr("stroke-width", 3)
	
	const textgamesRPG = svg.append("text")
	.attr("x", (canvasW - 130))
	.attr("y", 95)
	.attr("text-anchor","middle")
	.attr("font-family", "sans-serif")
	.attr("font-size", "15px")
	.attr("fill", d3.color("black"))
	.text("gamesRPG")
	
	
	const rectgamesMGacha = svg.append("rect")
	.attr("fill", "lightcoral",.75)
	.attr("x", (canvasW - 225) )
	.attr("y", 140)
	.attr("width", 30)
	.attr("height", 30)
	.attr("stroke", d3.color("black"))
	.attr("stroke-width", 3)
	
	const textgamesMGacha = svg.append("text")
	.attr("x", (canvasW - 125))
	.attr("y", 160)
	.attr("text-anchor","middle")
	.attr("font-family", "sans-serif")
	.attr("font-size", "15px")
	.attr("fill", d3.color("black"))
	.text("gamesMGatcha")	
	
	const MonText = svg.append("text")
    .attr("x",  ((margin*1.75)) + 65 )
    .attr("y", canvasH - 35)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "60px")
    .attr("fill", "black")
    .text("M");
	
	const TuesText = svg.append("text")
    .attr("x",  ((margin*1.75) + 165) )
    .attr("y", canvasH - 35)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "60px")
    .attr("fill", "black")
    .text("T");
	
    const WedText = svg.append("text")
    .attr("x",  ((margin*1.75) + 265) )
    .attr("y", canvasH - 35)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "60px")
    .attr("fill", "black")
    .text("W");
	
    const ThursText = svg.append("text")
    .attr("x",  ((margin*1.75) + 365) )
    .attr("y", canvasH - 35)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "60px")
    .attr("fill", "black")
    .text("Th");

	const FriText = svg.append("text")
    .attr("x",  ((margin*1.75) + 465) )
    .attr("y", canvasH - 35)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "60px")
    .attr("fill", "black")
    .text("F");
	
	const SatText = svg.append("text")
    .attr("x",  ((margin*1.75) + 565) )
    .attr("y", canvasH - 35)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "60px")
    .attr("fill", "black")
    .text("S");	
	
	const SunText = svg.append("text")
    .attr("x",  ((margin*1.75) + 665) )
    .attr("y", canvasH - 35)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "60px")
    .attr("fill", "black")
    .text("Su");
	
	var width = 400,
        height = 400;
		

    var data = [0,1,2,3,4,5,6,7,8,9,10];
	
	// Create scale
    var scale = d3.scaleLinear()
                  .domain([d3.max(data), d3.min(data)])
                  .range([100, 675]);

    // Add scales to axis
    var y_axis = d3.axisRight()
                   .scale(scale);
				   
	
				

    //Append group and insert axis
    svg.append("g")
	   .style("font", "30px times")
	   .attr("transform", "translate(70,0)")
       .call(y_axis);
	   
	svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0)
        .attr("x",-160 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
		.attr("font-family", "sans-serif")
		.attr("font-size", "40px")
        .text("Levels of Fun");
	 
	let rects = svg.selectAll()
	   .data(gamesMGacha)
	   .enter()
	      .append("rect")
		     .attr("fill", d3.color("lightcoral", .75))
			 .attr("x", d=> {return (margin*1.75) + (100*(d.ID)) + 30; } )
			 .attr("y", d=> {return -40 + canvasH - (margin + (d.GameID*yinc*1.2)); } )
			 .attr("width", d=> {return 75} )
			 .attr("height", d=> {return 50} )
			 .attr("stroke", d3.color("black"))
			 .attr("stroke-width", 3)
	
			.on("mouseover", expandRect)
			.on("mouseout", shrinkRect)
		;
		
	let rects2 = svg.selectAll()
	   .data(gamesRPG)
	   .enter()
	      .append("rect")
		     .attr("fill", d3.color("lightblue", .75))
			 .attr("x", d=> {return (margin*1.75) + (100*(d.ID)) + 30; } )
			 .attr("y", d=> {return -40 + canvasH - (margin + (d.GameID*yinc*1.2)); } )
			 .attr("width", d=> {return 75} )
			 .attr("height", d=> {return 50} )
			 .attr("stroke", d3.color("black"))
			 .attr("stroke-width", 3)
			 
			 .on("mouseover", expandRect)
			 .on("mouseout", shrinkRect)
		;
		
	
	


	function expandRect(d,i) {
	  //let heightTop = canvasH - (d.Fun*60);
	  d3.select(this).transition()
     	.duration("200")
        .attr("y", d => {return (676 - (57.5*d.Fun));}) //canvasH - (d.Fun*60)) - 100;}
		.attr("height", d => {return (57.5*d.Fun); } )  //(776 - (canvasH - (d.Fun*60)))

      /*gameText = svg.append("text")
        .attr("x", 850)  //d=> {return (margin*1.75) + (100*(d.ID)) + 35; }
		.attr("y", 250)  //d=> {return -35 + canvasH - (margin + (d.GameID*yinc*1.2));}
		.attr("text-anchor","middle")
		.attr("font-family", "sans-serif")
		.attr("font-size", "15px")
		.attr("fill", "black")
		.text("Game Fun Level: " );	*/
		
	  
	}
	
	function shrinkRect(d,i) {
	  d3.select(this).transition()
		.duration("200")
		.attr("y", d=> {return -40 + canvasH - (margin + (d.GameID*yinc*1.2)); })
		.attr("height", 50)
		
	  
	  gameText.text("")
	  //d3.select(this.gameText).remove();
	}
	
	/*function gameInfoRed(d,i) {
	  gameText = svg.append("text")
        .attr("x", 50)  
		.attr("y", 50)
		.attr("text-anchor","middle")
		.attr("font-family", "sans-serif")
		.attr("font-size", "15px")
		.attr("fill", "black")
		.text("Hello Red");
	}
	
	function gameInfoBlue(d,i) {
	  gameText = svg.append("text")
        .attr("x", 100)  
		.attr("y", 50)
		.attr("text-anchor","middle")
		.attr("font-family", "sans-serif")
		.attr("font-size", "15px")
		.attr("fill", "black")
		.text("Hello Blue");
	}*/
	
	
	
	

	
	
	

	
	
}
