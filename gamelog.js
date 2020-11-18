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
		
		
	let tasks;
	
	tasksCompleted = elements.filter( e=> {return e.Completed == "yes"} );
	tasksNotCompleted = elements.filter( e=> {return e.Completed != "yes"} );
	
	
	/*tasksWednesday = elements.filter( e=> {return e.Day == "Wednesday" && e.Completed == "yes"} );
	tasksThursday = elements.filter( e=> {return e.Day == "Thursday" && e.Completed == "yes"} );
	tasksFriday = elements.filter( e => {return e.Day == "Friday" && e.Completed == "yes"} );
	tasksSaturday = elements.filter( e => {return e.Day == "Saturday" && e.Completed == "yes"} );
	tasksSunday = elements.filter( e => {return e.Day == "Sunday" && e.Completed == "yes"} );
	tasksMonday = elements.filter( e => {return e.Day == "Monday" && e.Completed == "yes"} );
	tasksTuesday = elements.filter( e => {return e.Day == "Tuesday" && e.Completed == "yes"} );
	
	tasksIncompleteWed = elements.filter( e=> {return e.Day == "Wednesday" && e.Completed != "yes"} );
	tasksIncompleteThurs = elements.filter( e=> {return e.Day == "Thursday" && e.Completed != "yes"} );
	tasksIncompleteFri = elements.filter( e => {return e.Day == "Friday" && e.Completed != "yes"} );
	tasksIncompleteSat = elements.filter( e => {return e.Day == "Saturday" && e.Completed != "yes"} );
	tasksIncompleteSun = elements.filter( e => {return e.Day == "Sunday" && e.Completed != "yes"} );
	tasksIncompleteMon = elements.filter( e => {return e.Day == "Monday" && e.Completed != "yes"} );
	tasksIncompleteTues = elements.filter( e => {return e.Day == "Tuesday" && e.Completed != "yes"} );*/
	
	//console.log(tasksWednesday);
	//console.log(tasksThursday);
	//console.log(tasksFriday);	
	let rects = svg.selectAll()
	   .data(tasksCompleted)
	   .enter()
	      .append("rect")
		     .attr("fill", d3.color("turquoise"))
			 .attr("x", d=> {return -30 + (margin*1.75) + (100*(d.ID)); } )
			 .attr("y", d=> {return -30 + canvasH - (margin + (d.TaskNum*yinc)); } )
			 .attr("width", d=> {return 20} )
			 .attr("height", d=> {return 20} )
			 .attr("stroke", d3.color("black"))
			 .attr("stroke-width", 3)
	
	let rects2 = svg.selectAll()
	   .data(tasksNotCompleted)
	   .enter()
	      .append("rect")
		     .attr("fill", d3.color("red"))
			 .attr("x", d=> {return -30 + (margin*1.75) + (100*(d.ID)); } )
			 .attr("y", d=> {return -30 + canvasH - (margin + (d.TaskNum*yinc)); } )
			 .attr("width", d=> {return 20} )
			 .attr("height", d=> {return 20} )
			 .attr("stroke", d3.color("black"))
			 .attr("stroke-width", 3)
	
	
	
	
	/*
	let rectsA = svg.selectAll()
	   .data(tasksWednesday)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("turquoise"))
			.attr("x", d=> { return -30 + (margin*1.75); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;
		
	let rectsB = svg.selectAll()
	   .data(tasksIncompleteWed)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("red"))
			.attr("x", d=> { return -30 + (margin*1.75); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;
	
	let rects2A = svg.selectAll()
	   .data(tasksThursday)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("turquoise"))
			.attr("x", d=> { return -30 + (margin*1.75) + 100; } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;	
		
	let rects2B = svg.selectAll()
	   .data(tasksIncompleteThurs)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("red"))
			.attr("x", d=> { return -30 + (margin*1.75) + 100; } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;
    
	let rects3A = svg.selectAll()
	   .data(tasksFriday)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("turquoise"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*2); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;	
		
	let rects3B = svg.selectAll()
	   .data(tasksIncompleteFri)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("red"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*2); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;
		
	let rects4A = svg.selectAll()
	   .data(tasksSaturday)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("turquoise"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*3); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;

	let rects4B = svg.selectAll()
	   .data(tasksIncompleteSat)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("red"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*3); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;	
		
	let rects5A = svg.selectAll()
	   .data(tasksSunday)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("turquoise"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*4); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;

	let rects5B = svg.selectAll()
	   .data(tasksIncompleteSun)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("red"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*4); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;	
		
	let rects6A = svg.selectAll()
	   .data(tasksMonday)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("turquoise"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*5); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;

	let rects6B = svg.selectAll()
	   .data(tasksIncompleteMon)
	   .enter()
	      .append("rect")
			.attr("fill", d3.color("red"))
			.attr("x", d=> { return -30 + (margin*1.75) + (100*5); } )
		    .attr("y", d=> { return -30 + canvasH - (margin + (d.TaskNum * yinc)); } )
		    .attr("width", d=> { return 20; } )
		    .attr("height", d=> { return 20;} )
		    .attr("stroke", d3.color("black"))
		    .attr("stroke-width", 3)
		;	*/
		
	
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
	.text("Completed Tasks")
	
	
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
	.text("Incompleted Tasks")	
	
	const WedText = svg.append("text")
    .attr("x",  (-25 + (margin*1.75)) + 10 )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Wednesday");
	
	const ThursText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + 100) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Thursday");
	
    const FriText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*2)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Friday");
	
    const SatText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*3)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Saturday");

	const SunText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*4)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Sunday");
	
	const MonText = svg.append("text")
    .attr("x",  (-20 + (margin*1.75) + (100*5)) )
    .attr("y", canvasH - 60)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")
    .text("Monday");	
	
}