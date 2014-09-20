describe("YoTimeChecker", function() {
  var timeChecker;

  beforeEach(function() {
    timeChecker = new YoTimeChecker
  });

  withTimeFrozenAt("2014-01-01 09:25:00 GMT+0000", function(){

    it("knows it's time to yo when it's 9:25am", function(){
      expect(timeChecker.yoTime()).toBe(true)
    })
  })

  withTimeFrozenAt("2014-01-01 14:25:00 GMT+0000", function(){

    it("knows it's time to yo when it's 2:25pm", function(){
      expect(timeChecker.yoTime()).toBe(true)
    })
  })

  withTimeFrozenAt("2014-01-01 9:00:00 GMT+0000", function(){

    it("knows it's not time to yo when it's 9am", function(){
      expect(timeChecker.yoTime()).toBe(false)
    })
  })

});
