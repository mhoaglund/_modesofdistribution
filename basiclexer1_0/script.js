$(document).ready(function(){
  var lexed=new Array;
  var lexicon = {
    "dance": { "trans":"wetness" },
    "theory": { "trans":"guess" },
    "lexicon": { "trans":"box"},
    "labor": { "trans":"work"},
    "environment": { "trans":"weather"},
    "commit": { "trans":"engage"},
    "lexer": { "trans":"box"},
    "changes": { "trans":"voyages"},
    "updates": { "trans":"journeys"},
    "alter": { "trans":"ruin"},
    "altered": { "trans":"ruined"},
  }

  $("#lex").click(function(){ 
    var lexed = [];

        var origText = $("#orig").val();
        var origPrep = origText.split(" ");
    
        origPrep.forEach(function(entry) {
          try{
            x=lexicon[entry].trans;
            entry = x;
            lexed.push(entry);
          }

          catch (e){
            lexed.push(entry);
          }
        });
        $("#lexed").val(lexed.join(" "));
      });
});

