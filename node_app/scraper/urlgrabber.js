var phantom = require('phantom');

var starturl = "http://www.toothbrushing.net";

function urls_cb(list){
	console.log(list);
	exports.links = list;
};

//6252014 New sample code form phantomjs-node. 
exports.links = phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(starturl, function (status) {
      console.log("Status? ", status);
      page.evaluate(function () { 
	  //return document.title; 
		var mastertext = [];
		var nl = document.querySelectorAll("a");
		for(var i = 0, n; n = nl[i]; ++i) mastertext.push(n.href);
		return mastertext;
	  }, 
	  function (result, urls_cb) {
        //console.log('Page title is ' + result);
		//urls_cb(result);
        ph.exit();
      });
    });
  });
});

//exports.links = phantom.create(phantomCreate(ph, phantomOpen));