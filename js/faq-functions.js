/* FAQ settings */
ddaccordion.init({
	headerclass: "ask", 
	contentclass: "question", 
	revealtype: "click", 
	mouseoverdelay: 200, 
	collapseprev: false, 
	defaultexpanded: [], 
	onemustopen: false, 
	animatedefault: false,
	persiststate: false, 
	toggleclass: ["closedquestion", "openquestion"], 
	togglehtml: ["prefix", "<img src='assets/images/closed.gif' alt='' style='width:13px; height:13px; margin-top:2px; float:right;' /> ", "<img src='assets/images/open.gif' alt='' style='width:13px; height:13px; margin-top:2px; float:right;' /> "], 
	animatespeed: "fast", 
	oninit:function(expandedindices){ 
	},
	onopenclose:function(header, index, state, isuseractivated){ 		
	}
})
