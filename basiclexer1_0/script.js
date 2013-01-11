
$(document).ready(function(){
    
    $("#lex").click(function(){
      var origText = $("#orig").val();
      var origPrep = origText.split(" ");
      
      for (var i = 0; i < origPrep.length; i++){
        filterLanguage();
      }
      
      $("#lexed").val(main);
    });
});

function filterLanguage(t) {
  if(t == "yes"){
     main.push(t); 
  }
}
