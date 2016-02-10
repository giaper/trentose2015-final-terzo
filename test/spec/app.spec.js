/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("Parla", function() {

  it("getLenguagesScore should work properly", function() {  
    expect(ParlaModel.getLanguageScore("non è blu", "Italian")).toBe(2);
    expect(ParlaModel.getLanguageScore("pero sus le ha", "Spanish")).toBe(4);
    expect(ParlaModel.getLanguageScore("to join the beatles", "English")).toBe(2);
  });
  it("detect lenguage should work properly", function(){
    expect(ParlaModel.detectLanguage("non è blu")).toBe("Italian");
    expect(ParlaModel.detectLanguage("to join the beatles")).toBe("English"); 
    expect(ParlaModel.detectLanguage("pero sus le ha")).toBe("Spanish"); 
  });
 
});
