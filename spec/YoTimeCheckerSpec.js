describe("YoTimeChecker", function() {
  var timeChecker;

  beforeEach(function() {
    timeChecker = new YoTimeChecker
  });

  describe("Time of day to yo:", function(){

    withTimeFrozenAt("2014-01-01 09:25:00 GMT+0000", function(){

      it("knows it's time to yo when it's 9:25am", function(){
        expect(timeChecker.isYoTime()).toBe(true)
      })
    })

    withTimeFrozenAt("2014-01-01 14:25:00 GMT+0000", function(){

      it("knows it's time to yo when it's 2:25pm", function(){
        expect(timeChecker.isYoTime()).toBe(true)
      })
    })

    withTimeFrozenAt("2014-01-01 9:00:00 GMT+0000", function(){

      it("knows it's not time to yo when it's 9am", function(){
        expect(timeChecker.isYoTime()).toBe(false)
      })
    })

  })

  describe("Weekend behaviour:", function(){

    withTimeFrozenAt("2014-01-01 09:25:00 GMT+0000", function(){

      it("knows when it's not the weekend", function(){
        expect(timeChecker.isWeekend()).toBe(false)
      })

    })

    withTimeFrozenAt("2014-01-04 09:25:00 GMT+0000", function(){

      it("knows Saturday is on the weekend", function(){
        expect(timeChecker.isWeekend()).toBe(true)
      })
    })


    withTimeFrozenAt("2014-01-05 09:25:00 GMT+0000", function(){

      it("knows Sunday is on the weekend", function(){
        expect(timeChecker.isWeekend()).toBe(true)
      })
    })

    withTimeFrozenAt("2014-01-04 09:25:00 GMT+0000", function(){

      it("will not yo on a Saturday", function(){
        expect(timeChecker.isYoTime()).toBe(false)
      })

    })

    withTimeFrozenAt("2014-01-05 09:25:00 GMT+0000", function(){

      it("will not yo on a Sunday", function(){
        expect(timeChecker.isYoTime()).toBe(false)
      })

    })

  })


});
