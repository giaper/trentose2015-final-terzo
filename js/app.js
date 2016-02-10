var ParlaModel = {
  
   /* Langs contain the list of language with their corresponding
    * dictionaries 
    */
   langs : languages,
    
   init : function() {
       this.frase = $("#frase").val().split(" ");
   },    
  
   /* Returns the score of the given phrase in the given language
    * The score is computed simply as the number of words - in the
    * language dictionary - that are found in the phrase
    * @return score, if language is valid
    *         null, if language is not valid
    */
   getLanguageScore : function (phrase, language){
     // write your code here, but don't add any additional 
     // parameters to the the function
        var x = 0;
        var conto = 0;
        if (language == "ita") {x=0;}
        if (language == "eng") {x=1;}
        if (language == "spa") {x=2;}
        for (var i=0; i<phrase.length; i++){
            for (var j=0; j<language[x].dictionary.length; j++){
                if (phrase[i]==language[x].dictionary[j]) {conto = conto+1;}
            }
        }
        return conto;
        
   },
  
   /* Returns the name of the language in which the phrase
    * (most likely) is written. The detection essentially 
    * returns the language with higher *score*. 
    */
   detectLanguage : function (phrase) {
        var conto_ita=0;
        var conto_eng=0;
        var conto_spa=0;
        for (var i=0; i<phrase.length; i++){
            for (var j=0; j<language[1].dictionary.length; j++){
                if (phrase[i]==language[1].dictionary[j]) {conto_ita = conto_ita+1;}
            }
            for (var k=0; k<language[2].dictionary.length; k++){
                if (phrase[i]==language[2].dictionary[k]) {conto_eng = conto_eng+1;}
            }
            for (var w=0; w<language[3].dictionary.length; w++){
                if (phrase[i]==language[3].dictionary[w]) {conto_spa = conto_spa+1;}
            }
            
        }
        if (conto_ita>conto_eng && conto_ita>conto_spa){return "Italian";}
        if (conto_eng>conto_ita && conto_eng>conto_spa){return "English";}
        if (conto_spa>conto_ita && conto_spa>conto_eng){return "Spanish";}
   }
};

var tmp = "X"

var View = {
    init : function() { 
        var leng = Controller.get_score();
        $(".lang-name").html("");
        $(".lang-name").append(tmp.replace("X", leng));
    }
};

var Controller = {
    init : function() {
        ParlaModel.init();
        View.init();
    },
    get_score : function() {
        return ParlaModel.detectLanguage(frase);
    }
    
};

$(document).ready(function(){
    $("button").click(function() {
        console.log("pushed");
        Controller.init();     
    });
});
