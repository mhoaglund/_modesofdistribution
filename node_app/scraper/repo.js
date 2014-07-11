var http = require('http');
var phantom = require('phantom');
var urlgrabber = require('./urlgrabber.js');

var links = urlgrabber.collection;

function processUrls(items, process){
	var sites = urls.concat;
	
	setTimeout(function(){
		process(sites.shift());
		if(sites.length > 0){
			setTimeout(arguments.callee, 25);
		}
	}, 25);
}

setTimeout(function(){
processUrls(links, function(){
	phantom.create(function(ph) {
	  return ph.createPage(function(page) {
		return page.open(links, function(status) {

		  console.log("Status:", status);
		  var texts = page.evaluate((function() {
		  
			var mastertext = [];
			var nl = document.querySelectorAll("p");
			
			for(var i = 0, n; n = nl[i]; ++i) mastertext.push(n.textContent);
			
			return mastertext;
			
			}), 
			function(result) {
				console.log(result);
				return ph.exit();
			});
		  return [texts];
		});
	  });

	});
});
}, 10000);
	

