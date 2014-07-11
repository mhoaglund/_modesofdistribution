var http = require('http');
var phantom = require('phantom');
var urlgrabber = require('./urlgrabber.js');

var links = urlgrabber.links;
var sites;
var starturl = "http://www.toothbrushing.net";

 function processUrls(items, callback){
	 result = items.concat;
	 //sites.shift;
	 callback(result);
 }
 
 function grabText(links){
	phantom.create(function(ph) {
	   ph.createPage(function(page) {
		 page.open(starturl, function(status) {

		   console.log("Text grabber Status:", status);
		  
		   var yyy = page.evaluate((function() {
		  
			 var mastertext = [];
			 var nl = document.querySelectorAll("p");
			
			 for(var i = 0, n; n = nl[i]; ++i) mastertext.push(n.textContent);
				return mastertext;
			 }), 
			 function(result) {
				 console.log(result);
				 return ph.exit();
			 });
		   return [links, yyy];
		  
		 });
	   });
	 });
 };
 
 processUrls(links, grabText);