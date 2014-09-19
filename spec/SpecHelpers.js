var withTimeFrozenAt = function(time, fn){
  describe('with time frozen at ' + time, function() {
    var oldDate = Date;

    beforeEach( function() {
      Date = function() {
        return new oldDate(time);
      };
    });

    afterEach(function() {
      Date = oldDate;
    });

    fn();
  });
};
