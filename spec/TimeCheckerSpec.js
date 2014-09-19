describe("TimeChecker", function() {
  var timeChecker;
  var nineThirty;

  beforeEach(function() {
    timeChecker = new TimeChecker
  });

  withTimeFrozenAt("2014-01-01 09:30:00 GMT+0000", function(){

    it("knows when the time is 9:30am", function(){
      expect(timeChecker.yoTime()).toBe(true)
    })
  })

  withTimeFrozenAt("2014-01-01 14:30:00 GMT+0000", function(){

    it("knows when the time is 2:30pm", function(){
      expect(timeChecker.yoTime()).toBe(true)
    })
  })



});
