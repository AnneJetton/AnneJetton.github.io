
	
function mathify(xvalue, operator, yvalue){
	let userHasABrainCell = !isNaN(xvalue);
	let userHas2BrainCells = !isNaN(yvalue);
	let returnableStuff = [];
	let solution = 0;
	
	if (userHasABrainCell && userHas2BrainCells){
		switch (operator) {
			case "+":
				solution = xvalue + yvalue;
				returnableStuff = [xvalue, operator, yvalue, solution];
				break;
			case "-":
				solution = xvalue - yvalue;
				returnableStuff = [xvalue, operator, yvalue, solution];
				break;
			case "*":
				solution = xvalue * yvalue;
				returnableStuff = [xvalue, operator, yvalue, solution];
				break;
			case "/":
				if (yvalue === 0){
					returnableStuff = [xvalue, operator, yvalue, "Computation Error"];
				}else{
					solution = xvalue / yvalue;
					returnableStuff = [xvalue, operator, yvalue, solution];
				}
				break;
			case "%":
				solution = xvalue % yvalue;
				returnableStuff = [xvalue, operator, yvalue, solution];
				break;
			default:
				returnableStuff = [xvalue, operator, yvalue, "Computation Error"];
				break;
				
		}
	}else{
		returnableStuff = [xvalue, operator, yvalue, "Arithmetic Error"]
	}	
	
	return returnableStuff;
}

function tableify(inputArray){
	document.write("<table>");
	document.write("<tr><th>xvalues</th><th>operator</th><th>yvalues</th><th>solutions</th>");
	for(let miniArray = 0; miniArray < inputArray.length; miniArray++){
		document.write("<tr><td>" + inputArray[miniArray][0] + "</td><td>" + inputArray[miniArray][1] + "</td><td>" + inputArray[miniArray][2] + "</td><td>" + inputArray[miniArray][3] + "</td></tr>");
	}
	document.write("</table>");
}

function statsTableify(inputArray) {
	document.write("<table>");
	document.write("<tr><th>Minimum value</th><th>Maximum value</th><th>Average Value</th><th>Total Value</th>");
	let tally = 0;
	let minValue = Infinity;
	let maxValue = 0;
	let totalValue = 0;
	
	for (let miniArray = 0; miniArray < inputArray.length; miniArray++){
		if(!isNaN(inputArray[miniArray][3])){
			totalValue = totalValue + inputArray[miniArray][3];
			if(minValue > inputArray[miniArray][3]){minValue = inputArray[miniArray][3];}
			if(maxValue < inputArray[miniArray][3]){maxValue = inputArray[miniArray][3];}
			tally++;
		}	
	}	
	
	let averageValue = totalValue/tally;
	document.write("<tr><td>" + minValue + "</td><td>" + maxValue + "</td><td>" + averageValue + "</td><td>" + totalValue + "</td></tr>");
	document.write("</table>");
}

let endloop = true;
let inputArray = [];
	
while(endloop){
	//get the stuff
	let susXValue = prompt("please enter a value for x:", "");
	let operator = prompt("please enter a valid operator:", "");
	let susYValue = prompt("please enter a value for y:", "");
			
	//change the stuff
	xvalue = parseFloat(susXValue);
	yvalue = parseFloat(susYValue);
			
	//push the stuff to the other functions
	inputArray.push(mathify(xvalue, operator, yvalue));
			
	//check if the potato of a user is done yet.
	endloop = confirm("Are you done mathing?");
}	
tableify(inputArray);
statsTableify(inputArray);

