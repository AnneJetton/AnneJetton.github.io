
let icons = d3.select('body')

let div1 = d3.select('body').append('div').attr('id', 'div1').text("In: ");
let div2 = d3.select('body').append('div').attr('id', 'div2').text("Out: ");
let div3 = d3.select('body').append('div').attr('id', 'div3').text("Mouse: ");

icons.append('span')
	.attr("id", "icons")
	.attr("background-color", "blue")
	.on('mousemove', event => div3.text("Mouse X: " + d3.pointer(event)[0] + ", Y: " + d3.pointer(event)[1]));



	//.on('mousemove', () => trackMouse());

//let iconSpan = d3.select("#span")

//icons.on("mousemove", (e) => trackMouse());

// function trackMouse() {
// 	div3.textContent = ("updated!!");
// }

function mouseIn(object, objname){
	object.style('opacity', 0.5);
	div1.text("In: " + objname);
}

function mouseOut(object, objname){
	object.style('opacity', 1.0);
	div2.text("In: " + objname);
}

function smaller(object){
	object.style('padding-right', "20px");
	object.style('padding-left', "20px");
}

function bigger(object) {
	object.style('padding-right', "0px");
	object.style('padding-left', "0px");
}


let facebook = icons.append('img').attr('id', "facebook").attr('src', "facebook3.jpg").attr('width', 100).attr('height', 100)
	.on('mouseenter', () => mouseIn(facebook, "Facebook"))
	.on('mouseleave', () => mouseOut(facebook, "Facebook"))
    .on('mousedown', () => smaller(facebook))
    .on('mouseup', () => bigger(facebook))
    .on('dblclick', () => window.open('https://www.facebook.com', '_blank'));
	
let twitter = icons.append('img').attr('id', "twitter").attr('src', "twitter3.jpg").attr('width', 100).attr('height', 100)
	.on('mouseenter', () => mouseIn(twitter, "Twitter"))
	.on('mouseleave', () => mouseOut(twitter, "Twitter"))
    .on('mousedown', () => smaller(twitter))
    .on('mouseup', () => bigger(twitter))
    .on('dblclick', () => window.open('https://www.twitter.com', '_blank'));
	
let linkedin = icons.append('img').attr('id', "linkedin").attr('src', "linkedin1.jpg").attr('width', 100).attr('height', 100)
	.on('mouseenter', () => mouseIn(linkedin, "Linkedin"))
	.on('mouseleave', () => mouseOut(linkedin, "Linkedin"))
    .on('mousedown', () => smaller(linkedin))
    .on('mouseup', () => bigger(linkedin))
    .on('dblclick', () => window.open('https://www.linkedin.com', '_blank'));
	
let reddit = icons.append('img').attr('src', "reddit1.jpg").attr('id', "reddit").attr('width', 100).attr('height', 100)
	.on('mouseenter', () => mouseIn(reddit, "Reddit"))
	.on('mouseleave', () => mouseOut(reddit, "Reddit"))
    .on('mousedown', () => smaller(reddit))
    .on('mouseup', () => bigger(reddit))
    .on('dblclick', () => window.open('https://www.reddit.com', '_blank'));
	
 let instagram = icons.append('img').attr('src', "instagram1.jpg").attr('id', "instagram").attr('width', 100).attr('height', 100)
	.on('mouseenter', () => mouseIn(instagram, "Instagram"))
	.on('mouseleave', () => mouseOut(instagram, "Instagram"))
    .on('mousedown', () => smaller(instagram))
    .on('mouseup', () => bigger(instagram))
    .on('dblclick', () => window.open('https://www.instagram.com', '_blank'));
	
